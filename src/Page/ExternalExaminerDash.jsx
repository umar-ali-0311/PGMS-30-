import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
export default function ExternalExaminerDash() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>External Examiner Dashboard</h1>
      {!!user && (
        <h1>
          Welcome! {user.name}!<br></br> {user.email}
          {user.hashedPassword}
        </h1>
      )}
    </div>
  );
}
