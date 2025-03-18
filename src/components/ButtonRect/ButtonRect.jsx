import './ButtonRect.sass';

export default function ButtonRect(props) {
  const { text, classes } = props;
  return (
    <>
      <button className={`btn-rounded text-2xl font-bold relative ${classes}`}>
        {text}
        <span className='circle'></span>
      </button>
    </>
  );
}
