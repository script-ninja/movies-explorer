import './Main.css';

export default function Main(props) {
  return (
    <section className="main">
      { props.children }
    </section>
  );
}