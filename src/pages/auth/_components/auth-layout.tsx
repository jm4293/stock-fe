import { useDeviceLayout } from '@/hooks/useDeviceLayout';
import { BackSvg } from '@/asset/svg';
import { Text } from '@/components/text';
import { useLocation, useNavigate } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
}

const headerName: { [key: string]: string } = {
  '/auth/login': '로그인',
  '/auth/register': '회원가입',
};

export const AuthLayout = (props: IProps) => {
  const { children } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const { isMobile } = useDeviceLayout();

  const onClickHandler = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();

    navigate(-1);
  };

  return (
    <div className="h-[100vh] flex justify-center overflow-x-hidden overflow-y-auto">
      <div
        className={`${isMobile ? 'w-full' : 'w-[80vw]'} max-w-[660px] px-5 pb-10 flex flex-col items-center overflow-y-auto`}>
        <div className="w-full h-14  max-h-[56px] mb-14 grid grid-cols-3 items-center">
          <BackSvg color="#000000" className="col-span-1" onClick={(event) => onClickHandler(event)} />
          <Text value={headerName[location.pathname]} color="#282828" size="lg" align="center" />
        </div>

        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
