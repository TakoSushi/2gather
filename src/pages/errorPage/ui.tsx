import { Flex, Typography } from 'antd';
import {
  ErrorResponse,
  isRouteErrorResponse,
  Link,
  useRouteError,
} from 'react-router-dom';

import { GhoustIcon } from './ghoustIcon';

type TError = {
  message: string;
  status: number;
  statusText: string;
};

function getErrorMessage(error: ErrorResponse): string {
  const messages: Record<number, string> = {
    404: "This page doesn't exist!",
    401: "You aren't authorized to see this!",
    503: 'Looks like our API is down!',
    418: "I'm a teapot!",
  };

  return messages[error.status];
}

function handleError(error: unknown): TError {
  const defaultError: TError = {
    message: 'Something went wrong!',
    status: 500,
    statusText: 'Internal Server Error',
  };

  if (isRouteErrorResponse(error)) {
    return {
      message: getErrorMessage(error),
      status: error.status,
      statusText: error.statusText,
    };
  }

  return defaultError;
}

export function ErrorPage() {
  const error = useRouteError();

  const handlingError = handleError(error);

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap="medium"
      style={{ width: '100%', height: '80vh' }}
    >
      <Typography.Paragraph style={{ fontSize: '20px' }}>
        {handlingError.statusText}
      </Typography.Paragraph>
      <Typography.Text style={{ fontSize: '120px' }}>
        {handlingError.status}
        <GhoustIcon />
      </Typography.Text>
      <Typography.Text italic>{handlingError.message}</Typography.Text>
      <Typography.Text>
        <Link to="/">Вернуться на главную страницу</Link>
      </Typography.Text>
    </Flex>
  );
}
