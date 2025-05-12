import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { Input, Label, Row, Col, Button, Card, CardHeader, CardBody, FormGroup, InputGroup, CardFooter } from "reactstrap";
import { loginUser } from "../Slicer/AuthSlice";
import { useNavigate } from "react-router-dom";
// https://dummyjson.com/docs/auth
// emilys
// emilyspass
function Login() {
  const [details, setDetails] = useState({ username: 'emilys', password: 'emilyspass'});
  const user = useSelector((state) => state.auth?.user);
  const navigate = useNavigate();
  const dispatch =useDispatch();
   const handleSave = () =>{
    dispatch(loginUser(details));
   }

   useEffect (()=>{
      if (user?.accessToken) {
        navigate("/Home");
      }
    }, [user, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 justify-content-center">
        <Col md="6" lg="4">
          <Card>
            <CardHeader className="text-center">Login</CardHeader>
            <CardBody>
              <FormGroup>
                <Label>email</Label>
                <InputGroup>
                  <Input
                    name="username"
                    value={details.username}
                    onChange={(e) => setDetails({ ...details, username: e.target.value })}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <InputGroup>
                  <Input
                    type="password"
                    name="password"
                    value={details.password}
                    onChange={(e) => setDetails({ ...details, password: e.target.value })}
                  />
                </InputGroup>
              </FormGroup>
            </CardBody>
            <CardFooter className="text-center">
              <Button type="submit" onClick={handleSave} color="warning">Save</Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
