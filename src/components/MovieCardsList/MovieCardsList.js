import './MovieCardsList.css';

export default function MovieCardsList(props) {
  return (
    <section className='moviecardslist'>
      { props.children }
    </section>
  );
}
