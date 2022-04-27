/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UpcomingGames
// ====================================================

export interface UpcomingGames_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface UpcomingGames_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface UpcomingGames_upcomingGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: UpcomingGames_upcomingGames_cover | null;
  developers: UpcomingGames_upcomingGames_developers[];
  price: number | null;
}

export interface UpcomingGames {
  upcomingGames: UpcomingGames_upcomingGames[];
}

export interface UpcomingGamesVariables {
  date: any;
}
