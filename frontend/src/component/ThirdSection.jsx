import React from 'react';
import { Card, Icon } from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
const { Meta } = Card;
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Image from '../recipe.jpg';

const ThirdSection = () => {
  return (
    <>
      <CssBaseline />
      <Container
        style={{
          padding: 'auto',
        }}
      >
        <Grid container spacing={6} style={{}}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: 215 }}
              cover={<img alt="example" src={Image} />}
              actions={[<Icon type="heart" />, <Icon type="double-right" />]}
            >
              <Meta title="Shrimp and Chorizo Paella" />
              <Badge variant="danger">ingredients needed</Badge>
              <Badge variant="success">ingredients in stock</Badge>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: 215 }}
              cover={<img alt="example" src={Image} />}
              actions={[<Icon type="heart" />, <Icon type="double-right" />]}
            >
              <Meta title="Shrimp and Chorizo Paella" />
              <Badge variant="danger">ingredients needed</Badge>
              <Badge variant="success">ingredients in stock</Badge>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card
              style={{ width: 215 }}
              cover={<img alt="example" src={Image} />}
              actions={[<Icon type="heart" />, <Icon type="double-right" />]}
            >
              <Meta title="Shrimp and Chorizo Paella" />
              <Badge variant="danger">ingredients needed</Badge>
              <Badge variant="success">ingredients in stock</Badge>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ThirdSection;
