const loader = require("./twss-loader");

describe("gonna test twss-loader exciting 🤩", () => {
  it("should return source properly", () => {
    const source = loader(`
    # this is twss-loader

    *nav:
      bg-blue-200 
      p-3 
      flex
    
    *name: 
      *nav
      text-gray-700 
      text-2xl 
      hover:text-black 
    `);

    expect(source).toBe(
      `module.exports={"nav":"bg-blue-200 p-3 flex","name":"  text-gray-700 text-2xl hover:text-black bg-blue-200 p-3 flex"}`
    );
  });
});
