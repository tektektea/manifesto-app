/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConstituency = /* GraphQL */ `
  mutation CreateConstituency(
    $input: CreateConstituencyInput!
    $condition: ModelConstituencyConditionInput
  ) {
    createConstituency(input: $input, condition: $condition) {
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
export const updateConstituency = /* GraphQL */ `
  mutation UpdateConstituency(
    $input: UpdateConstituencyInput!
    $condition: ModelConstituencyConditionInput
  ) {
    updateConstituency(input: $input, condition: $condition) {
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
export const deleteConstituency = /* GraphQL */ `
  mutation DeleteConstituency(
    $input: DeleteConstituencyInput!
    $condition: ModelConstituencyConditionInput
  ) {
    deleteConstituency(input: $input, condition: $condition) {
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
export const createDistrict = /* GraphQL */ `
  mutation CreateDistrict(
    $input: CreateDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    createDistrict(input: $input, condition: $condition) {
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
export const updateDistrict = /* GraphQL */ `
  mutation UpdateDistrict(
    $input: UpdateDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    updateDistrict(input: $input, condition: $condition) {
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
export const deleteDistrict = /* GraphQL */ `
  mutation DeleteDistrict(
    $input: DeleteDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    deleteDistrict(input: $input, condition: $condition) {
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
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
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
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
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
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
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
export const createManifesto = /* GraphQL */ `
  mutation CreateManifesto(
    $input: CreateManifestoInput!
    $condition: ModelManifestoConditionInput
  ) {
    createManifesto(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateManifesto = /* GraphQL */ `
  mutation UpdateManifesto(
    $input: UpdateManifestoInput!
    $condition: ModelManifestoConditionInput
  ) {
    updateManifesto(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteManifesto = /* GraphQL */ `
  mutation DeleteManifesto(
    $input: DeleteManifestoInput!
    $condition: ModelManifestoConditionInput
  ) {
    deleteManifesto(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createParty = /* GraphQL */ `
  mutation CreateParty(
    $input: CreatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    createParty(input: $input, condition: $condition) {
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
export const updateParty = /* GraphQL */ `
  mutation UpdateParty(
    $input: UpdatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    updateParty(input: $input, condition: $condition) {
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
export const deleteParty = /* GraphQL */ `
  mutation DeleteParty(
    $input: DeletePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    deleteParty(input: $input, condition: $condition) {
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
export const createCandidateConstituency = /* GraphQL */ `
  mutation CreateCandidateConstituency(
    $input: CreateCandidateConstituencyInput!
    $condition: ModelCandidateConstituencyConditionInput
  ) {
    createCandidateConstituency(input: $input, condition: $condition) {
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
export const updateCandidateConstituency = /* GraphQL */ `
  mutation UpdateCandidateConstituency(
    $input: UpdateCandidateConstituencyInput!
    $condition: ModelCandidateConstituencyConditionInput
  ) {
    updateCandidateConstituency(input: $input, condition: $condition) {
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
export const deleteCandidateConstituency = /* GraphQL */ `
  mutation DeleteCandidateConstituency(
    $input: DeleteCandidateConstituencyInput!
    $condition: ModelCandidateConstituencyConditionInput
  ) {
    deleteCandidateConstituency(input: $input, condition: $condition) {
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
