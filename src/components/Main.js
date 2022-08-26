import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [currentMeal, setCurrentMeal] = useState("");
  const [ad, setAd] = useState("");
  const [pizza, setPizza] = useState("");
  const [drink, setDrink] = useState("");
  const [sogan, setSogan] = useState("");
  const [domates, setDomates] = useState("");
  const [marul, setMarul] = useState("");
  const [tursu, setTursu] = useState("");
  const [rows, setRows] = useState([]);
  // const [update, setUpdate] = useState([]);
  
const changeMeal = (newMeal) => {
    setCurrentMeal(newMeal);
    if(newMeal==="pizza"||newMeal===""){
        setSogan("");
        setDomates("");
        setMarul("");
        setTursu("");
        setPizza("");
    }else{
        setPizza("");
    }
  };
  const changeDrink = (newDrink) => {
    setDrink(newDrink);
  };
  const changeName = (newAd) => {
    setAd(newAd);
  };
  const changePizza = (newPizza) => {
    setPizza(newPizza);
  };
  const addRow = (newRow) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewRow = { id, ...newRow };
    setRows([...rows, addNewRow]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.parentElement.lastElementChild.classList.add("show");
    addRow({ ad, currentMeal, drink, pizza, sogan, domates, marul, tursu});
    setCurrentMeal("");
    setAd("");
    setDrink("");
    setSogan("");
    setDomates("");
    setMarul("");
    setTursu("");
  };
  const changeSogan = () => {
    setSogan("soğan");
  };
  const deleteSogan = () => {
    setSogan("");
  };
  const changeDomates = () => {
    setDomates("domates");
  };
const deleteDomates = () =>{
    setDomates("");
    };
  const changeMarul = () => {
    setMarul("marul");
  };
  const deleteMarul = () => {
    setMarul("");
  };
  const changeTursu = () => {
    setTursu("turşu");
  };
  const deleteTursu = () => {
    setTursu("");
  };
  // const updateRow = (updated) => {
  //   setUpdate(rows.filter((row) => row.id === updated));
  //   console.log(update);
  // };
  const deleteRow = (deletedTaskId) =>{
    setRows(rows.filter((row) => row.id !== deletedTaskId));
  };
  return (
    <div>
      <h1>Yemek Sipariş Uygulaması</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ad Soyad"
          required="required"
          value={ad}
          onChange={(e) => changeName(e.target.value)}
        />
        <select
          name="yemek"
          id="yemek"
          onChange={(e) => changeMeal(e.target.value)}
          value={currentMeal}
        >
          <option value="">Yemek Türleri</option>
          <option value="hamburger">Hamburger</option>
          <option value="pizza">Pizza</option>
        </select>
        <select
          name="icecek"
          id="icecek"
          value={drink}
          onChange={(e) => changeDrink(e.target.value)}
        >
          <option value="">İçecek</option>
          <option value="kola">Kola</option>
          <option value="icetea">İcetea</option>
          <option value="ayran">Ayran</option>
          <option value="şalgam">Şalgam</option>
        </select>
        <input type="submit" value="Kaydet" />
        {currentMeal === "hamburger" && (
          <div className="hamburger">
            <h4>
              Lütfen içerisine koyulmasını istediğiniz malzemeleri
              işaretleyiniz:
            </h4>
            <div>
              <input
                type="checkbox"
                name="sogan"
                id="sogan"
                value="soğan"
                onChange={(e) =>
                  e.target.checked ? changeSogan() : deleteSogan()
                }
              />
              <label htmlFor="sogan">Soğan</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="domates"
                id="domates"
                value="domates"
                onChange={(e) =>
                  e.target.checked ? changeDomates() : deleteDomates()
                }
              />
              <label htmlFor="domates">Domates</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="marul"
                id="marul"
                value="marul"
                onChange={(e) =>
                  e.target.checked ? changeMarul() : deleteMarul()
                }
              />
              <label htmlFor="marul">Marul</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="tursu"
                id="tursu"
                value="turşu"
                onChange={(e) =>
                  e.target.checked ? changeTursu() : deleteTursu()
                }
              />
              <label htmlFor="tursu">Turşu</label>
            </div>
          </div>
        )}
        {currentMeal === "pizza" && (
          <div className="pizza">
            <h4>Ne tür bir pizza arzu edersiniz:</h4>
            <select
              name="pizza"
              id="pizza"
              onChange={(e) => changePizza(e.target.value)}
            >
              <option value="belirtmedi">çeşit</option>
              <option value="peynirli">Peynirli</option>
              <option value="peperoni">Peperoni</option>
              <option value="karışık">Karışık</option>
              <option value="italyan">İtalyan</option>
            </select>
          </div>
        )}
      </form>
      <hr />
      <br />
      <br />

      {rows.length > 0 ? (
        <table id="table">
          <tr>
            <th>Ad Soyad</th>
            <th>Yemek</th>
            <th>Çeşit veya İçerik</th>
            <th>İçecek</th>
          </tr>

          {rows.map((row) => (
            <tr>
              <td>{row.ad}</td>
              <td>{row.currentMeal}</td>
              <td>
                {row.pizza}
                {`${row.sogan}` && `+${row.sogan}`}
                {`${row.domates}` && `+${row.domates}`}
                {`${row.marul}` && `+${row.marul}`}
                {`${row.tursu}` && `+${row.tursu}`}
              </td>
              <td>{row.drink}</td>
              {/* <td>
                <button onClick={() => updateRow(row.id)}>Düzenle</button>
              </td> */}
              <td>
                <button onClick={() => deleteRow(row.id)}>
                  Siparişi Sil
                </button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <h2 style={{ textAlign: "center" }}>HENÜZ SİPARİŞ VEREN KİMSE YOK!</h2>
      )}
    </div>
  );
};
export default Main;
