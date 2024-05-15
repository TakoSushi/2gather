import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = 'Ой, что то пошло не так!!!';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "This page doesn't exist!";
    }

    if (error.status === 401) {
      errorMessage = "You aren't authorized to see this";
    }

    if (error.status === 503) {
      errorMessage = 'Looks like our API is down';
    }

    if (error.status === 418) {
      errorMessage = '🫖';
    }

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.status}</i>
          <i>{errorMessage}</i>
        </p>
      </div>
    );
  }
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  if (typeof error === 'string') {
    errorMessage = error;
  }

  return <div id="error-page">{errorMessage}</div>;
}
