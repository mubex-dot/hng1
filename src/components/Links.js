function Links(props) {
  return (
    <main>
      <a href={props.link.url}>{props.link.desc}</a>
    </main>
  );
}

export default Links;
