export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20 text-lg">
      <h1 className="text-[45px]">API</h1>
      <br />
      <h2 className="text-[30px]">(Application Programming Interface)</h2>
      <br />
      <p className="text-[20px] p-10">
        An API is a way for two or more software programs or systems to
        communicate and interact with each other by defining a set of rules and
        protocols for data exchange.
      </p>
      <br/>
      <h3>Here’s a quick overview of the HTTP methods GET, POST, PUT, and DELETE:</h3>
      <br/>
      <li>GET: Fetches data from the server</li>
      <li>POST: Sends data to the server to create something new</li>
      <li>PUT: Updates an existing resource completely </li>
      <li>DELETE: Removes a resource from the server</li>
    </main>
  );
}
