import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import type { Principal } from "@icp-sdk/core/principal";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  principal: Principal | undefined;
  login: () => void;
  logout: () => void;
}

export function useAuth(): AuthState {
  const { identity, login, clear, loginStatus } = useInternetIdentity();

  const principal = identity?.getPrincipal();
  const isAuthenticated =
    loginStatus === "success" &&
    principal !== undefined &&
    !principal.isAnonymous();
  const isLoading = loginStatus === "logging-in";

  return {
    isAuthenticated,
    isLoading,
    principal,
    login,
    logout: clear,
  };
}
