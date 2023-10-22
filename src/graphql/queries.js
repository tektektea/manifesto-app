/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConstituency = /* GraphQL */ `
  query GetConstituency($id: ID!) {
    getConstituency(id: $id) {
      id
      name
      districtID
      candidates {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listConstituencies = /* GraphQL */ `
  query ListConstituencies(
    $filter: ModelConstituencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConstituencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        districtID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const constituenciesByDistrictID = /* GraphQL */ `
  query ConstituenciesByDistrictID(
    $districtID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConstituencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    constituenciesByDistrictID(
      districtID: $districtID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        districtID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDistrict = /* GraphQL */ `
  query GetDistrict($id: ID!) {
    getDistrict(id: $id) {
      id
      name
      Constituencies {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDistricts = /* GraphQL */ `
  query ListDistricts(
    $filter: ModelDistrictFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDistricts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      name
      description
      avatar
      partyID
      Constituencies {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        avatar
        partyID
        Constituencies {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const candidatesByPartyID = /* GraphQL */ `
  query CandidatesByPartyID(
    $partyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    candidatesByPartyID(
      partyID: $partyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        avatar
        partyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getManifesto = /* GraphQL */ `
  query GetManifesto($id: ID!) {
    getManifesto(id: $id) {
      id
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listManifestos = /* GraphQL */ `
  query ListManifestos(
    $filter: ModelManifestoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManifestos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
      id
      name
      logo
      Manifesto {
        id
        content
        createdAt
        updatedAt
        __typename
      }
      Candidates {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      partyManifestoId
      __typename
    }
  }
`;
export const listParties = /* GraphQL */ `
  query ListParties(
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        createdAt
        updatedAt
        partyManifestoId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCandidateConstituency = /* GraphQL */ `
  query GetCandidateConstituency($id: ID!) {
    getCandidateConstituency(id: $id) {
      id
      constituencyId
      candidateId
      constituency {
        id
        name
        districtID
        createdAt
        updatedAt
        __typename
      }
      candidate {
        id
        name
        description
        avatar
        partyID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCandidateConstituencies = /* GraphQL */ `
  query ListCandidateConstituencies(
    $filter: ModelCandidateConstituencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidateConstituencies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        constituencyId
        candidateId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const candidateConstituenciesByConstituencyId = /* GraphQL */ `
  query CandidateConstituenciesByConstituencyId(
    $constituencyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateConstituencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    candidateConstituenciesByConstituencyId(
      constituencyId: $constituencyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        constituencyId
        candidateId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const candidateConstituenciesByCandidateId = /* GraphQL */ `
  query CandidateConstituenciesByCandidateId(
    $candidateId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCandidateConstituencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    candidateConstituenciesByCandidateId(
      candidateId: $candidateId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        constituencyId
        candidateId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
