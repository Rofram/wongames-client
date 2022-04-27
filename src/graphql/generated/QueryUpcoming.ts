/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_home_upcomingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_home_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_home_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcoming_home_upcomingGames_highlight_background | null;
  floatImage: QueryUpcoming_home_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryUpcoming_home_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcoming_home_upcomingGames_highlight | null;
}

export interface QueryUpcoming_home {
  __typename: "Home";
  upcomingGames: QueryUpcoming_home_upcomingGames | null;
}

export interface QueryUpcoming_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcoming_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryUpcoming_games_cover | null;
  developers: QueryUpcoming_games_developers[];
  price: number | null;
}

export interface QueryUpcoming {
  home: QueryUpcoming_home | null;
  games: QueryUpcoming_games[];
}

export interface QueryUpcomingVariables {
  date: any;
}
