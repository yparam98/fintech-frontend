import React from 'react';
import {Header} from '../components/header/Header'
import{Balance} from '../components/balance/balance'
import {IncomeExpenses} from '../components/incomeExpanses/IncomeExpenses'
import {TransactionList} from '../components/TransactionList/TransactionList'
import{AddTransaction} from '../components/addTransaction/addTransaction'
import{GlobalProvider} from '../components/context/GlobalState'
import Money from '../assets/Money.png'
import '../Dashboard.css';
import VoiceSearchButton from '../components/voice/VoiceSearchButton';

function Dashboard() {
  return (
    // <div className="box">
    //   <GlobalProvider>
    //   <Header/>
    //   <div className="container-dash">
    //     <Balance/>
    //     <IncomeExpenses/>
    //     <TransactionList/>
    //     <AddTransaction/>
    //   </div>
    //   </GlobalProvider>
    // </div>
    <div className="container mt-3">
      <div className="row">
      <GlobalProvider>
      <Header/>
        <div className="col-md-5">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={Money} alt=""/>
        </div>
        <VoiceSearchButton/>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default Dashboard;
