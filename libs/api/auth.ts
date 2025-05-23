import { useAuthStore } from "@/src/stores/useAuthStore";
import { saveRefreshToken } from "@/src/utils/secureToken";

const BASE_URL = "http://192.168.4.18:3050";

export const signin = async (email: string, password: string) => {
  const res = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.message || "로그인 실패");
  }

  const { accessToken, refreshToken, role } = json.data;
  useAuthStore.getState().setAuth(accessToken, role);
  await saveRefreshToken(refreshToken);
};
