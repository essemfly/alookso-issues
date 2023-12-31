import { ReactNode, SVGProps } from 'react';

type SvgProps = SVGProps<SVGSVGElement> & {
  path?: string;
  children?: ReactNode;
};

const Svg = ({ path, children, ...props }: SvgProps) => {
  return (
    <svg
      {...props}
      className={`h-6 w-6 fill-current text-gray-400 ${props.className || ''}`}
    >
      {children ?? <use xlinkHref={`/_images/icons/icons.svg#${path}`} />}
    </svg>
  );
};

export default Svg;
