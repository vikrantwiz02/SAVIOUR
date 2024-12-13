import ClientOnly from './client-only';

function MyComponent() {
  return (
    <div>
      <h1>This is a server-rendered component</h1>
      <ClientOnly>
        <div>This will only render on the client</div>
      </ClientOnly>
    </div>
  );
}

export default MyComponent;