import { Route, Routes } from "react-router-dom";
import { RequestProcessor } from "../Service/RequestProcessor";
import { Login } from "./Login";




export const Content = (props) => {

  return (
    <>
      <Routes>
        <Route

          exact
          path={'/login'}
          element={<RequestProcessor Component={Login} />}
        />

        {/*
        <Route
          exact
          path={'/signup'}
          element={<UrlProtect Component={SignUp} />}
        /> */}
        
        {props.data.map((section) => (
          <>
            {section.option.map((item, i) => (
              <>
                {item.subItem.length != 0 ? (
                  item.subItem.map((subItem, j) => (
                    <>
                      <Route
                        key={j}
                        exact
                        path={subItem.path}
                        element={<RequestProcessor Component={subItem.subComponent} />}
                      />

                    </>
                  ))
                ) : (
                  <Route
                    key={i}
                    exact
                    path={item.path}
                    element={<RequestProcessor Component={item.component} />}
                  />
                )}
              </>
            ))}
          </>
        ))}
      </Routes>
    </>
  );
};
