function calculator(number) {
  let count = number;
  let animationCount = (440 * count) / 100;
  let result = 440 - animationCount;
  return result;
}

const documentData = [
  {
    id: "01",
    displayCount: "25",
    count: calculator(25),
    description: `
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
              neque? Id ab quae facere rem repellendus ipsa error libero
              excepturi ducimus atque recusandae, ullam nobis tempore sunt!
              Delectus perferendis labore aspernatur ipsa voluptas quo sint.
              Provident, possimus atque explicabo corrupti soluta doloribus
              rerum incidunt at obcaecati. Quisquam vitae facilis neque.`,
  },
  {
    id: "02",
    displayCount: "50",
    count: calculator(50),
    description: `
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
              neque? Id ab quae facere rem repellendus ipsa error libero
              excepturi ducimus atque recusandae, ullam nobis tempore sunt!
              Delectus perferendis labore aspernatur ipsa voluptas quo sint.
              Provident, possimus atque explicabo corrupti soluta doloribus
              rerum incidunt at obcaecati. Quisquam vitae facilis neque.`,
  },
  {
    id: "03",
    displayCount: "10",
    count: calculator(10),
    description: `
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
              neque? Id ab quae facere rem repellendus ipsa error libero
              excepturi ducimus atque recusandae, ullam nobis tempore sunt!
              Delectus perferendis labore aspernatur ipsa voluptas quo sint.
              Provident, possimus atque explicabo corrupti soluta doloribus
              rerum incidunt at obcaecati. Quisquam vitae facilis neque.`,
  }
];

export default documentData;
