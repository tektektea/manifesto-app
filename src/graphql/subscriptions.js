/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConstituency = /* GraphQL */ `
  subscription OnCreateConstituency(
    $filter: ModelSubscriptionConstituencyFilterInput
  ) {
    onCreateConstituency(filter: $filter) {
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
export const onUpdateConstituency = /* GraphQL */ `
  subscription OnUpdateConstituency(
    $filter: ModelSubscriptionConstituencyFilterInput
  ) {
    onUpdateConstituency(filter: $filter) {
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
export const onDeleteConstituency = /* GraphQL */ `
  subscription OnDeleteConstituency(
    $filter: ModelSubscriptionConstituencyFilterInput
  ) {
    onDeleteConstituency(filter: $filter) {
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
export const onCreateDistrict = /* GraphQL */ `
  subscription OnCreateDistrict($filter: ModelSubscriptionDistrictFilterInput) {
    onCreateDistrict(filter: $filter) {
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
export const onUpdateDistrict = /* GraphQL */ `
  subscription OnUpdateDistrict($filter: ModelSubscriptionDistrictFilterInput) {
    onUpdateDistrict(filter: $filter) {
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
export const onDeleteDistrict = /* GraphQL */ `
  subscription OnDeleteDistrict($filter: ModelSubscriptionDistrictFilterInput) {
    onDeleteDistrict(filter: $filter) {
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
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onCreateCandidate(filter: $filter) {
      id
      name
      description
      avatar
      partyID
      Constituencies {
        nextToken
        __typename
      }
      Party {
        id
        name
        logo
        createdAt
        updatedAt
        partyManifestoId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onUpdateCandidate(filter: $filter) {
      id
      name
      description
      avatar
      partyID
      Constituencies {
        nextToken
        __typename
      }
      Party {
        id
        name
        logo
        createdAt
        updatedAt
        partyManifestoId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onDeleteCandidate(filter: $filter) {
      id
      name
      description
      avatar
      partyID
      Constituencies {
        nextToken
        __typename
      }
      Party {
        id
        name
        logo
        createdAt
        updatedAt
        partyManifestoId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateManifesto = /* GraphQL */ `
  subscription OnCreateManifesto(
    $filter: ModelSubscriptionManifestoFilterInput
  ) {
    onCreateManifesto(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateManifesto = /* GraphQL */ `
  subscription OnUpdateManifesto(
    $filter: ModelSubscriptionManifestoFilterInput
  ) {
    onUpdateManifesto(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteManifesto = /* GraphQL */ `
  subscription OnDeleteManifesto(
    $filter: ModelSubscriptionManifestoFilterInput
  ) {
    onDeleteManifesto(filter: $filter) {
      id
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty($filter: ModelSubscriptionPartyFilterInput) {
    onCreateParty(filter: $filter) {
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
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty($filter: ModelSubscriptionPartyFilterInput) {
    onUpdateParty(filter: $filter) {
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
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty($filter: ModelSubscriptionPartyFilterInput) {
    onDeleteParty(filter: $filter) {
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
export const onCreateCandidateConstituency = /* GraphQL */ `
  subscription OnCreateCandidateConstituency(
    $filter: ModelSubscriptionCandidateConstituencyFilterInput
  ) {
    onCreateCandidateConstituency(filter: $filter) {
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
export const onUpdateCandidateConstituency = /* GraphQL */ `
  subscription OnUpdateCandidateConstituency(
    $filter: ModelSubscriptionCandidateConstituencyFilterInput
  ) {
    onUpdateCandidateConstituency(filter: $filter) {
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
export const onDeleteCandidateConstituency = /* GraphQL */ `
  subscription OnDeleteCandidateConstituency(
    $filter: ModelSubscriptionCandidateConstituencyFilterInput
  ) {
    onDeleteCandidateConstituency(filter: $filter) {
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
