export const ROLES = {
  VOORZITTER: "Voorzitter",
  VICEVOORZITTER: "Vicevoorzitter",
  SECRETARIS: "Secretaris",
  PENNINGMEESTER: "Penningmeester",
  INTERIM_PENNINGMEESTER: "Interim Penningmeester",
  PR: "PR",
  LID: "Lid",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
