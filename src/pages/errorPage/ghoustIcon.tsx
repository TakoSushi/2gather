import Icon from '@ant-design/icons';
import type { GetProps } from 'antd';

type CustomIconComponentProps = GetProps<typeof Icon>;

const GhoustSvg = () => (
  <svg
    fill="#000000"
    width="1em"
    height="1em"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <g>
      <g>
        <path
          d="M255.999,0C161.053,0,83.808,77.245,83.808,172.191v329.61c0,5.633,4.566,10.199,10.199,10.199h323.985
        c5.632,0,10.199-4.566,10.199-10.199v-329.61C428.191,77.245,350.946,0,255.999,0z M407.792,491.602h-32.474v-68.736
        c0-5.633-4.567-10.199-10.199-10.199s-10.199,4.566-10.199,10.199v68.736h-34.161V383.028c0-5.633-4.567-10.199-10.199-10.199
        s-10.199,4.566-10.199,10.199v108.574h-34.161v-68.736c0-5.633-4.567-10.199-10.199-10.199c-5.633,0-10.199,4.566-10.199,10.199
        v68.736h-34.161V383.028c0-5.633-4.566-10.199-10.199-10.199c-5.633,0-10.199,4.566-10.199,10.199v108.574h-34.162v-68.736
        c0-5.633-4.566-10.199-10.199-10.199s-10.199,4.566-10.199,10.199v68.736h-32.474V172.191
        c0.001-83.699,68.095-151.793,151.794-151.793s151.793,68.094,151.793,151.793V491.602z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M365.12,376.351c-5.632,0-10.199,4.566-10.199,10.199v5.197c0,5.633,4.567,10.199,10.199,10.199
        c5.632,0,10.199-4.566,10.199-10.199v-5.197C375.319,380.917,370.752,376.351,365.12,376.351z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M233.501,191.241h-97.87c-5.633,0-10.199,4.566-10.199,10.199c0,32.607,26.527,59.134,59.134,59.134
        S243.7,234.047,243.7,201.44C243.7,195.807,239.134,191.241,233.501,191.241z M184.565,240.176
        c-17.829,0-32.885-12.111-37.373-28.536h74.747C217.451,228.065,202.396,240.176,184.565,240.176z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M376.368,191.241h-97.87c-5.633,0-10.199,4.566-10.199,10.199c0,32.607,26.528,59.134,59.134,59.134
        s59.134-26.527,59.134-59.134C386.568,195.807,382,191.241,376.368,191.241z M327.434,240.176
        c-17.83,0-32.885-12.111-37.374-28.536h74.748C360.32,228.065,345.264,240.176,327.434,240.176z"
        />
      </g>
    </g>
  </svg>
);

export const GhoustIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={GhoustSvg} {...props} />
);