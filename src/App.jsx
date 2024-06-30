import React from "react";
// import HOOKFetch from "./components/HOOKS/HOOKF";
import ComponentC from "./components/CONTEXT/ComponentC";
import CounterONe from "./components/USEREDUCER/CounterONe";
import CounterTwo from "./components/USEREDUCER/CounterTwo";
import DataFetchingOne from "./components/DATAFETCHING/DataFetchingOne";
import DatafetchingTwo from "./components/DATAFETCHING/DatafetchingTwo";
import Counter from "./components/USEMEMO/Counter";
import FocusInput from "./components/USEREF/FocusInput";
// import HookCounter from "./components/HOOKS/HookCounter";
// import HookCounter2 from "./components/HOOKS/HookCounter2";
// import HookCOunter3 from "./components/HOOKS/HookCOunter3";
// import HookCounter4 from "./components/HOOKS/HookCounter4";
// import HookCounter5 from "./components/HOOKS/HookCounter5";
// import HookMouse from "./components/HOOKS/HookMouse";
// import MouseContainer from "./components/HOOKS/MouseContainer";
// import IntervalClassCounter from "./components/HOOKS/IntervalClassCounter";
// import HOOKFetch from "./components/HOOKS/HOOKFetch";
// import PostForm from "./components/REACT-HTTP/PostForm";
// import PostList from "./components/REACT-HTTP/PostList";
// import ClickCounter from "./components/HOC/ClickCounter";
// import HoverCounter from "./components/HOC/HoverCounter";
// import UpdatedComponent from "./components/WithCounter";
// import PortalDemo from "./components/PortalDemo";
// import RefsDemo from "./components/RefsDemo";
// import PureComp from "./components/PureComp";
// import Tabel from "./components/Tabel";
// import Form from "./components/Form";
// import StyleSheet from "./components/StyleSheet";
// import Inline from "./components/Inline";
// import styles from "./appStyles.module.css";
// import './appStyles.css'

// import NameList from "./components/NameList";
// import Message from "./components/Message.jsx";
// import Counter from "./components/Counter.jsx";
// import FunctionClick from "./components/FunctionClick.jsx";
// import ParentComponent from "./components/ParentComponent.jsx";
// import UserGreeting from "./components/UserGreeting.jsx";

// import FragmentDemo from "./components/FragmentDemo";
export const UserContext = React.createContext();
export const channelContext = React.createContext();

const App = () => {
  return (
    <div>
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}

      {/* <Form /> */}

      {/* <FragmentDemo/> */}

      {/* <Tabel /> */}
      {/* <PureComp/> */}
      {/* <RefsDemo/> */}
      {/* <PortalDemo /> */}
      {/* <UpdatedComponent/> */}
      {/* <HoverCounter  />
      <ClickCounter name="Veant" /> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <HookCOunter3 /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter/> */}
      {/* <HOOKFetch /> */}
      {/* <HOOKFetch/> */}
      {/* <UserContext.Provider value={"Vedant"}>
        <channelContext.Provider value={"Gate topper"}>
          <ComponentC />
        </channelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterONe /> */}
      {/* <CounterTwo /> */}
      {/* <DataFetchingOne/> */}
      {/* <DatafetchingTwo/>  */}
      {/* <Counter/> */}
      <FocusInput />
    </div>
  );
};

export default App;
