function ComponentA() {
  return (
    <div>
      <h1>This is a ComponentA</h1>
    </div>
  );
}
// export default ComponentA; Default export
function ComponentB() {
  return (
    <div>
      <h1>This is a ComponentB</h1>
    </div>
  );
}

export { ComponentB }; // Named export
