type TestType = {
  title: string;
};
const TestBtn = ({ title }: TestType) => {
  return <button>{title}</button>;
};
export default TestBtn;
