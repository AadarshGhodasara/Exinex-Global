import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';

export function useSectionNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = !location.pathname.startsWith('/products/');

  const goToSection = (id: string) => {
    if (isHome) {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
    }
  };

  return { goToSection, isHome };
}