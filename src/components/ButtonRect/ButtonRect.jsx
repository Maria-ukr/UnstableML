import './ButtonRect.sass';

export default function ButtonRect(props) {
  return (
    <>
      <button className='btn-rounded text-2xl font-bold relative'>{props.text}</button>
    </>
  );
}
