import { useLocation, useNavigate } from 'react-router-dom';
import { memo, useCallback, useState } from 'react';
import { NavbarBoard, NavbarHome, NavbarMyPage, NavbarStock } from '@/asset/svg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pathname, setPathname] = useState<string>(location.pathname);

  const onClickHandler = useCallback((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();

    const { id } = event.currentTarget;
    setPathname(`/${id}`);
    navigate(id);
  }, []);

  return (
    <div className="navbar">
      <NavbarHome color={pathname === '/home' ? '#9470DC' : '#989898'} onClick={onClickHandler} />
      <NavbarStock color={pathname === '/stock' ? '#9470DC' : '#989898'} onClick={onClickHandler} />
      <NavbarBoard color={pathname === '/board' ? '#9470DC' : '#989898'} onClick={onClickHandler} />
      <NavbarMyPage color={pathname === '/mypage' ? '#9470DC' : '#989898'} onClick={onClickHandler} />
    </div>
  );
};

export default memo(Navbar);
