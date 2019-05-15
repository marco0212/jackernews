import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = function() {
  return (
    <Query query={HOME_PAGE}>
      {({ loading, error, data }) => {
        if (loading) return "loading";
        if (error) return "something is happen";
        return data.getTopstoryItems.map(article => {
          return (
            <h2 key={article.id}>
              {article.title} / {article.by}
            </h2>
          );
        });
      }}
    </Query>
  );
};

export default Home;
