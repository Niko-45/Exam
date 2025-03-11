/* eslint-disable react/prop-types */

export function Button({ children, mg, color = false }) {
  const col = color
  return (
    <button
      style={{
        margin: mg,
        padding: "10px 20px",
        backgroundColor: col ? "#61B5E4" : "#07AF91",
        borderRadius: "5px",
        border: "none",
        color: "white",
        cursor: "pointer",
        width: "auto", // Default width
        maxWidth: "100%", // Ensure it doesn't overflow
      }}
      className="responsive-button"
    >
      {children}
    </button>
  )
}

export function Card({ h1, p, name, btn, mg, btnCol, w, t = "start" }) {
  return (
    <div
      className={`responsive-card ${name}`}
      style={{
        margin: mg,
        width: w,
        textAlign: t,
        maxWidth: "100%", 
      }}
    >
      <h1>{h1}</h1>
      <p>{p}</p>
      <Button color={btnCol}>{btn}</Button>
    </div>
  )
}

export function Group({ textCol, img, col, title, text, name = false, w, mg }) {
  return (
    <div
      className={name ? "image-group responsive-group" : "card-group responsive-group"}
      style={{
        background: col,
        width: w,
        borderRadius: "20px",
        textAlign: "center",
        margin: mg,
        maxWidth: "100%", // Ensure it doesn't overflow
      }}
    >
      <img src={img || "/placeholder.svg"} alt="img..." className="responsive-image" />
      <p style={{ color: textCol }}>
        <b>{title}</b>
      </p>
      <p>{text}</p>
    </div>
  )
}

export function Select({ name, title, text, img, alt }) {
  return (
    <div
      className={`responsive-select ${name}`}
      style={{
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        margin: "10px auto",
        flexWrap: "wrap",
        padding: "5px 20px",
        boxShadow: "1px 1px 5px grey",
      }}
    >
      <div style={{ gap: "20px", display: "flex", flexWrap: "wrap" }}>
        <p style={{ color: "#2A79C2" }}>
          <b>{title}</b>
        </p>
        <p>{text}</p>
      </div>
      <img src={img || "/placeholder.svg"} alt={alt} className="responsive-icon" />
    </div>
  )
}

export function Info({ title, text, btn, name }) {
  return (
    <div className={name}>
      <h2>{title}</h2>
      <p>{text}</p>
      <Button>{btn}</Button>
    </div>
  )
}

export function Event({ img, title, text, date, name }) {
  return (
    <div className={name}>
      <img src={img || "/placeholder.svg"} alt="Event" />
      <h3>{title}</h3>
      <p>{text}</p>
      <p>{date}</p>
    </div>
  )
}

export function BlueText({ children }) {
  return <h1 style={{ color: "#2A79C2", margin: "20px 0", textAlign: "center" }}>{children}</h1>
}



export function CardInfo({ title, img, children }) {
  return (
    <div className="div-pay">
      <div style={{ textAlign: "center" }}>
        <img src={img} alt="..." />
        <h4>{title}</h4>
      </div>
      <hr />
      <div>{children}</div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <b>Готовность</b>
        </p>
        <p>7 раб. дней</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <b>Язык</b>
        </p>
        <p>рус. / англ.</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <b>Стоимость</b>
        </p>
        <p style={{ color: "#1178B2" }}>
          {" "}
          <b>$1 000 </b>{" "}
        </p>
      </div>
      <Button color={false}>Оставить заявку</Button>
    </div>
  );
}
