import React, { useState } from 'react';
import ButtonUI from './ButtonUI';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [showAddFreind, setShowAddFreind] = useState(false);
  const [freinds, setFreinds] = useState(initialFriends);
  const [selectedFreind, setSelectedFreind] = useState(null);

  function handleShowAddFreind() {
    setShowAddFreind(!showAddFreind);
  }

  function handleAddFreind(freind) {
    setFreinds(freinds => [...freinds, freind]);
    // if i want to hide the add new friend form after each add
    //use below but I dont want it
    // setShowAddFreind(false);
  }

  function handleSeletedFreind(freind) {
    setSelectedFreind(cur => (cur?.id === freind.id ? null : freind));
    setShowAddFreind(false);
    // setSelectedFreind(freind);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFreinds(freinds =>
      freinds.map(freind =>
        freind.id === selectedFreind.id
          ? { ...freind, balance: freind.balance + value }
          : freind
      )
    );
  }

  return (
    <div className="app">
      <div className="left ">
        <FreindsList
          freinds={freinds}
          selectedFreind={selectedFreind}
          onSelectedFreind={handleSeletedFreind}
        />

        {showAddFreind && <AddFreind onAddFreind={handleAddFreind} />}

        <button className="addnew" onClick={handleShowAddFreind}>
          <span>{showAddFreind ? 'Close' : 'Add New Freind'}</span>
        </button>
      </div>
      {selectedFreind && (
        <Split
          selectedFreind={selectedFreind}
          onSplitBill={handleSplitBill}
          key={selectedFreind.id}
        />
      )}
      <ButtonUI />
    </div>
  );
}

function FreindsList({ freinds, selectedFreind, onSelectedFreind }) {
  return (
    <ul className="FreindsList">
      {freinds.map(freind => (
        <Freind
          freind={freind}
          selectedFreind={selectedFreind}
          onSelectedFreind={onSelectedFreind}
          key={freind.id}
        />
      ))}
    </ul>
  );
}

function Freind({ freind, selectedFreind, onSelectedFreind }) {
  /**
   * The function `Friend` in JavaScript React renders a list item displaying friend information and
   * balance status with the ability to select or close the friend entry.
   * @returns The `Freind` component is being returned, which renders a list item (`<li>`) containing the
   * friend's image, name, a button to select or deselect the friend, and a message about the friend's
   * balance status (whether they owe money, you owe them money, or you are even). The component also
   * applies a "selected" class to the list item if the friend is currently
   */
  const isSelected = selectedFreind?.id === freind.id;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={freind.image} alt={freind.name} />
      <h3>{freind.name}</h3>

      <button onClick={() => onSelectedFreind(freind)}>
        <span>{isSelected ? 'Close' : 'Select'}</span>
      </button>

      {freind.balance < 0 && (
        <p className="red">
          You owe {freind.name} € {Math.abs(freind.balance)}
        </p>
      )}

      {freind.balance > 0 && (
        <p className="green">
          {freind.name} owes you € {Math.abs(freind.balance)}
        </p>
      )}

      {freind.balance === 0 && <p>You are even!</p>}
    </li>
  );
}

function AddFreind({ onAddFreind }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFreind = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFreind(newFreind);
    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form className="addnew" onSubmit={handleSubmit}>
      <div className="addnew-input-group">
        <label htmlFor="name">Freind Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="addnew-input-group">
        <label htmlFor="img">Image URL</label>
        <input
          type="text"
          id="img"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </div>
      <button>
        <span>Add Freind</span>
      </button>
    </form>
  );
}

function Split({ selectedFreind, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const paidByFreind = bill ? bill - paidByUser : '';

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFreind : -paidByUser);
  }

  return (
    <form className="split" onSubmit={handleSubmit}>
      <h3>Split a bill with {selectedFreind.name}</h3>

      <div className="split-input-group">
        <label htmlFor="billvalue">💲 Bill value</label>
        <input
          type="text"
          id="billvalue"
          value={bill}
          onChange={e => setBill(Number(e.target.value))}
        />
      </div>

      <div className="split-input-group">
        <label htmlFor="expense">🙋‍♂️ Your Expense</label>
        <input
          type="text"
          id="expense"
          value={paidByUser}
          onChange={e =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />
      </div>

      <div className="split-input-group">
        <label htmlFor="pplexp">👩‍🦰 ppl Expense</label>
        <input type="text" id="pplexp" readOnly value={paidByFreind} />
      </div>

      <div className="split-input-group">
        <p>💰 Who's paying the bill?</p>
        <select
          value={whoIsPaying}
          onChange={e => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFreind.name}</option>
        </select>
      </div>

      <button>
        <span>Split Bill</span>
      </button>
    </form>
  );
}
