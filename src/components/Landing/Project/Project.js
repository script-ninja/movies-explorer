import './Project.css';

export default function Project() {
  return (
    <section id='project' className='project'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__grid'>
        <h3 className='project__grid-title project__grid_group_one'>Дипломный проект включал 5 этапов</h3>
        <h3 className='project__grid-title project__grid_group_two'>На выполнение диплома ушло 5 недель</h3>
        <p className='project__grid-text project__grid_group_one'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className='project__grid-text project__grid_group_two'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <figure className='project__deadline project__deadline_bg_green project__deadline_width_small'>
        <p className='project__deadline-duration project__deadline-duration_bg_green'>1 неделя</p>
        <figcaption className='project__deadline-title'>Back-end</figcaption>
      </figure>
      <figure className='project__deadline project__deadline_width_big'>
        <p className='project__deadline-duration'>4 недели</p>
        <figcaption className='project__deadline-title'>Front-end</figcaption>
      </figure>
    </section>
  );
}