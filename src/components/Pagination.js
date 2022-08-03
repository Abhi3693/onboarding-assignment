function Pagination(props) {
  let activePage = props.activePage;
  return (
    <div>
      <div className='line'>
        <div
          className={
            activePage === 1
              ? 'line-compeleted width25'
              : activePage === 2
              ? 'line-compeleted width50'
              : activePage === 3
              ? 'line-compeleted width75'
              : 'line-compeleted width100'
          }
        ></div>
      </div>
      <div
        className={activePage >= 1 ? 'page page-1 compeleted' : 'page page-1'}
      >
        1
      </div>
      <div
        className={activePage >= 2 ? 'page page-2 compeleted' : 'page page-2'}
      >
        2
      </div>
      <div
        className={activePage >= 3 ? 'page page-3 compeleted' : 'page page-3'}
      >
        3
      </div>
      <div
        className={activePage === 4 ? 'page page-4 compeleted' : 'page page-4'}
      >
        4
      </div>
    </div>
  );
}

export default Pagination;
