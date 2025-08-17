import { useRouter } from "vue-router";

export const useNavigate = () => {
  const router = useRouter();
  return (route) => {
    router.push(route);
  };
};
