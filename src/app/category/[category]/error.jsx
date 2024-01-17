"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      There is an error
      <div>Opps</div>
      <button onClick={() => reset()}>Click here</button>
    </div>
  );
}
