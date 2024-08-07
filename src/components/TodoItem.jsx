function TodoItem({
  text = "Новая задача",
  isCompleted = false,
  description = "Не решена",
}) {
  return (
    <>
      <p>{text}</p>
      <p>{isCompleted}</p>
      <p>{description}</p>
    </>
  );
}
export default TodoItem;
