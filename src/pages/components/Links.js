function Links(props) {
  return (
    <main>
      <a
        id={props.link.id}
        href={props.link.url}
        target={props.link.target}
        rel="noopener noreferrer"
      >
        {props.link.desc}
      </a>
    </main>
  );
}

export default Links;
