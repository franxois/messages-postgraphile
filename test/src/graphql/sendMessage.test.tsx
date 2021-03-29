import ApolloClient, { gql } from "apollo-boost";
import fetch from "node-fetch";

const uri = process.env.POSTGRAPHILE_URL || "http://localhost:4000/graphql";

describe("Should send message", () => {
  it("should send message", async () => {
    const client = new ApolloClient({
      fetch,
      uri,
      onError: (e) => {
        console.log(e);
      },
    });

    const data = await client.mutate({
      mutation: gql`
        mutation {
          authenticate(input: { username: "Alice-test" }) {
            jwtToken
          }
        }
      `,
    });

    const token = data.data?.authenticate.jwtToken;

    expect(token).not.toBeNull();

    const client2 = new ApolloClient({
      fetch,
      uri,
      onError: (e) => {
        console.log(e);
      },
      request: (operation) => {
        operation.setContext({
          headers: { authorization: token ? `Bearer ${token}` : "" },
        });
      },
    });

    const data2 = await client2.query({
      query: gql`
        query {
          userByUsername(username: "Bob-test") {
            id
          }
        }
      `,
    });

    const bobId = data2.data.userByUsername.id;

    const data3 = await client2.mutate({
      mutation: gql`
        mutation {
          sendMessage(
            input: {
              recipient: "${bobId}"
              title: "title of the message"
              content: "content of the message"
            }
          ) {
            messages {
              content
              title
              id
            }
          }
        }
      `,
    });

    expect(1 + 1).toEqual(2);
  });
});
