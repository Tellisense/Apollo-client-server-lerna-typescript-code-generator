/* eslint-disable */ /* prettier-ignore */
/* *************** THIS FILE IS AUTO GENERATED *************** */
/* Do not commit this file to the repo. Any questions, contact Justin Rahimi*/
import { GraphQLResolveInfo } from 'graphql';
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Author of a complete Track or a Module */
export type Author = {
  __typename?: "Author";
  id: Scalars["ID"];
  /** Author's first and last name */
  name: Scalars["String"];
  /** Author's profile picture */
  photo?: Maybe<Scalars["String"]>;
};

export type IncrementTrackViewsResponse = {
  __typename?: "IncrementTrackViewsResponse";
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars["Int"];
  /** Human-readable message for the UI */
  message: Scalars["String"];
  /** Indicates whether the mutation was successful */
  success: Scalars["Boolean"];
  /** Newly updated track after a successful mutation */
  track?: Maybe<Track>;
};

/** A Module is a single unit of teaching. Multiple Modules compose a Track */
export type Module = {
  __typename?: "Module";
  /** The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript */
  content?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The module's length in minutes */
  length?: Maybe<Scalars["Int"]>;
  /** The module's title */
  title: Scalars["String"];
  /** The module's video url, for video-based modules */
  videoUrl?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Increment the number of views of a given track, when the track card is clicked */
  incrementTrackViews: IncrementTrackViewsResponse;
};

export type MutationIncrementTrackViewsArgs = {
  id: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  /** Fetch a specific module, provided a module's ID */
  module: Module;
  /** Fetch a specific track, provided a track's ID */
  track: Track;
  /** Query to get tracks array for the homepage grid */
  tracksForHome: Array<Track>;
};

export type QueryModuleArgs = {
  id: Scalars["ID"];
};

export type QueryTrackArgs = {
  id: Scalars["ID"];
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: "Track";
  /** The track's main Author */
  author: Author;
  /** The track's complete description, can be in markdown format */
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars["Int"]>;
  /** The track's complete array of Modules */
  modules: Array<Module>;
  /** The number of modules this track contains */
  modulesCount?: Maybe<Scalars["Int"]>;
  /** The number of times a track has been viewed */
  numberOfViews?: Maybe<Scalars["Int"]>;
  /** The track's illustration to display in track card or track page detail */
  thumbnail?: Maybe<Scalars["String"]>;
  /** The track's title */
  title: Scalars["String"];
};

export type IncrementTrackViewsMutationMutationVariables = Exact<{
  incrementTrackViewsId: Scalars["ID"];
}>;

export type IncrementTrackViewsMutationMutation = {
  __typename?: "Mutation";
  incrementTrackViews: {
    __typename?: "IncrementTrackViewsResponse";
    code: number;
    success: boolean;
    message: string;
    track?: Maybe<{
      __typename?: "Track";
      id: string;
      numberOfViews?: Maybe<number>;
    }>;
  };
};

export type GetTrackQueryVariables = Exact<{
  trackId: Scalars["ID"];
}>;

export type GetTrackQuery = {
  __typename?: "Query";
  track: {
    __typename?: "Track";
    id: string;
    title: string;
    thumbnail?: Maybe<string>;
    length?: Maybe<number>;
    modulesCount?: Maybe<number>;
    numberOfViews?: Maybe<number>;
    description?: Maybe<string>;
    author: {
      __typename?: "Author";
      id: string;
      name: string;
      photo?: Maybe<string>;
    };
    modules: Array<{
      __typename?: "Module";
      id: string;
      title: string;
      length?: Maybe<number>;
    }>;
  };
};

export type GetTracksQueryVariables = Exact<{ [key: string]: never }>;

export type GetTracksQuery = {
  __typename?: "Query";
  tracksForHome: Array<{
    __typename?: "Track";
    id: string;
    title: string;
    thumbnail?: Maybe<string>;
    length?: Maybe<number>;
    modulesCount?: Maybe<number>;
    author: { __typename?: "Author"; name: string; photo?: Maybe<string> };
  }>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  IncrementTrackViewsResponse: ResolverTypeWrapper<IncrementTrackViewsResponse>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Module: ResolverTypeWrapper<Module>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Track: ResolverTypeWrapper<Track>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  Boolean: Scalars["Boolean"];
  ID: Scalars["ID"];
  IncrementTrackViewsResponse: IncrementTrackViewsResponse;
  Int: Scalars["Int"];
  Module: Module;
  Mutation: {};
  Query: {};
  String: Scalars["String"];
  Track: Track;
};

export type AuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Author"] = ResolversParentTypes["Author"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncrementTrackViewsResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["IncrementTrackViewsResponse"] = ResolversParentTypes["IncrementTrackViewsResponse"]
> = {
  code?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  track?: Resolver<Maybe<ResolversTypes["Track"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModuleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Module"] = ResolversParentTypes["Module"]
> = {
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  videoUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  incrementTrackViews?: Resolver<
    ResolversTypes["IncrementTrackViewsResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationIncrementTrackViewsArgs, "id">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  module?: Resolver<
    ResolversTypes["Module"],
    ParentType,
    ContextType,
    RequireFields<QueryModuleArgs, "id">
  >;
  track?: Resolver<
    ResolversTypes["Track"],
    ParentType,
    ContextType,
    RequireFields<QueryTrackArgs, "id">
  >;
  tracksForHome?: Resolver<
    Array<ResolversTypes["Track"]>,
    ParentType,
    ContextType
  >;
};

export type TrackResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Track"] = ResolversParentTypes["Track"]
> = {
  author?: Resolver<ResolversTypes["Author"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  modules?: Resolver<Array<ResolversTypes["Module"]>, ParentType, ContextType>;
  modulesCount?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  numberOfViews?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  thumbnail?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  IncrementTrackViewsResponse?: IncrementTrackViewsResponseResolvers<ContextType>;
  Module?: ModuleResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
};

export const IncrementTrackViewsMutationDocument = gql`
  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`;
export type IncrementTrackViewsMutationMutationFn = Apollo.MutationFunction<
  IncrementTrackViewsMutationMutation,
  IncrementTrackViewsMutationMutationVariables
>;

/**
 * __useIncrementTrackViewsMutationMutation__
 *
 * To run a mutation, you first call `useIncrementTrackViewsMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIncrementTrackViewsMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [incrementTrackViewsMutationMutation, { data, loading, error }] = useIncrementTrackViewsMutationMutation({
 *   variables: {
 *      incrementTrackViewsId: // value for 'incrementTrackViewsId'
 *   },
 * });
 */
export function useIncrementTrackViewsMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    IncrementTrackViewsMutationMutation,
    IncrementTrackViewsMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    IncrementTrackViewsMutationMutation,
    IncrementTrackViewsMutationMutationVariables
  >(IncrementTrackViewsMutationDocument, options);
}
export type IncrementTrackViewsMutationMutationHookResult = ReturnType<
  typeof useIncrementTrackViewsMutationMutation
>;
export type IncrementTrackViewsMutationMutationResult =
  Apollo.MutationResult<IncrementTrackViewsMutationMutation>;
export type IncrementTrackViewsMutationMutationOptions =
  Apollo.BaseMutationOptions<
    IncrementTrackViewsMutationMutation,
    IncrementTrackViewsMutationMutationVariables
  >;
export const GetTrackDocument = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

/**
 * __useGetTrackQuery__
 *
 * To run a query within a React component, call `useGetTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackQuery({
 *   variables: {
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useGetTrackQuery(
  baseOptions: Apollo.QueryHookOptions<GetTrackQuery, GetTrackQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTrackQuery, GetTrackQueryVariables>(
    GetTrackDocument,
    options
  );
}
export function useGetTrackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTrackQuery,
    GetTrackQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTrackQuery, GetTrackQueryVariables>(
    GetTrackDocument,
    options
  );
}
export type GetTrackQueryHookResult = ReturnType<typeof useGetTrackQuery>;
export type GetTrackLazyQueryHookResult = ReturnType<
  typeof useGetTrackLazyQuery
>;
export type GetTrackQueryResult = Apollo.QueryResult<
  GetTrackQuery,
  GetTrackQueryVariables
>;
export const GetTracksDocument = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * __useGetTracksQuery__
 *
 * To run a query within a React component, call `useGetTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTracksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTracksQuery, GetTracksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTracksQuery, GetTracksQueryVariables>(
    GetTracksDocument,
    options
  );
}
export function useGetTracksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTracksQuery,
    GetTracksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTracksQuery, GetTracksQueryVariables>(
    GetTracksDocument,
    options
  );
}
export type GetTracksQueryHookResult = ReturnType<typeof useGetTracksQuery>;
export type GetTracksLazyQueryHookResult = ReturnType<
  typeof useGetTracksLazyQuery
>;
export type GetTracksQueryResult = Apollo.QueryResult<
  GetTracksQuery,
  GetTracksQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;

export const IncrementTrackViewsMutation = gql`
  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        id
        numberOfViews
      }
    }
  }
`;
export const GetTrack = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;
export const GetTracks = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;
