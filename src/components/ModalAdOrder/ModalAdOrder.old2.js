import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';

import axios from '../../axios';

import ModalBS from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import UploadImage from '../UploadImage/UploadImage';

import _ from "lodash";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
console.log("ResponsiveReactGridLayout");
console.log(ResponsiveReactGridLayout);

class ShowcaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: props.initialLayout }
    };

    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onCompactTypeChange = this.onCompactTypeChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  onCompactTypeChange() {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
          ? null
          : "horizontal";
    this.setState({ compactType });
  }

  onLayoutChange(layout, layouts) {
    this.props.onLayoutChange(layout, layouts);
  }

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  }

  render() {
    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} ({
            this.props.cols[this.state.currentBreakpoint]
          }{" "}
          columns)
        </div>
        <div>
          Compaction type:{" "}
          {_.capitalize(this.state.compactType) || "No Compaction"}
        </div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>
          Change Compaction Type
        </button>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

ShowcaseLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function() {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout()
};

function generateLayout() {
  return _.map(_.range(0, 25), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}

class GridLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  stringifyLayout() {
    return this.state.layout.map(function(l) {
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
          <div className="columns">{this.stringifyLayout()}</div>
        </div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
}

/* class ReactGridLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.adList = [];
    //async () => this.data = await axios.get('ads');
    this.getData = this.getData.bind();
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  getData() {
    async () => {
      const {data} = await axios.get('ads');
      this.setAdList(data);
    }
  }

  stringifyLayout() {
    return this.state.layout.map(function(l) {
      return (
        <div className="layoutItem" key={l.i}>
          <b>{l.i}</b>: [{l.x}, {l.y}, {l.w}, {l.h}]
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="layoutJSON">
          Displayed as <code>[x, y, w, h]</code>:
          <div className="columns">{this.stringifyLayout()}</div>
        </div>
        <ShowcaseLayout onLayoutChange={this.onLayoutChange} />
      </div>
    );
  }
} */

export default function ModalAdOrder ({ show, onHide, closeModal }) {

  const[grid, setGrid] = useState({});
  const[updatedGrid, setUpdatedGrid] = useState([]);

  const [id, setId] = useState();

  const [description, setDescription] = useState();
  const [adFormatId, setAdFormatId] = useState();

  let res = JSON.parse(localStorage.getItem('res'));
  let res2 = localStorage.getItem('res') !== null ? res : null;

  const getGrid = () => {
    console.log("GRID")
    console.log(grid)
    setGrid(layout);
  };

  useEffect(() => {
    getGrid();
  }, grid);

  const [adList, setAdList] = useState([]);

  const getData = async () => {
    const {data} = await axios.get('ads');
    setAdList(data);
  };

  useEffect(() => {
    getData();
  }, adList);

  const [adFormatList, setAdFormatList] = useState([]);

  const getDataFormat = async () => {
  const {data} = await axios.get('ad-formats');
    setAdFormatList(data);
  };

  useEffect(() => {
    getDataFormat();
  }, adFormatList); 

  var layout1 = [];

  adList.map(function myFunction(value, index, array) {
    if (index % 2 == 0)
      layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.height ?? 1 : 1 })
    else
      layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.height ?? 2 : 2 })
  })

  console.log("LAYOUT")
  console.log(layout1)
  console.log(adFormatList.filter(af => af._id == "611872d13a1f1854a4681008" )[0] ? adFormatList.filter(af => af._id == "611872d13a1f1854a4681008" )[0].width : 0)
  var layout = { lg: layout1 };

  console.log("LAYOUT2")
  console.log(grid)

  const[image, setImage] = useState();

  async function putAllAds() {
    /* grid.map((g) => { console.log(g.order.x) }) */
    console.log("updatedGrid");
    adList.map(async (al, i) => {
      if (al.order.x != updatedGrid[i].x || al.order.y != updatedGrid[i].y) {
        const request = {
          description: al.description,
          adFormatId: al.adFormatId,
          urls: [
            "https://poliedroscatalog.blob.core.windows.net/catalog-images/278ff8eb-e26c-42a0-aaf8-d72db5fc2b22.jpg"
          ],
          order: {
            x: updatedGrid[i].x,
            y: updatedGrid[i].y
          }
        }
        const token = res2.data.token;
        const headers =  {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        await axios.put(`/ads/${al._id}`, request, { headers: headers })
        /* alert("enviou") */
        console.log("REQUEST")
        console.log(request)
      }
    })

    console.log(adList);
    console.log(updatedGrid);

    /* const request = {
      description: description,
      adFormatId: adFormatId,
      urls: [
        "https://poliedroscatalog.blob.core.windows.net/catalog-images/278ff8eb-e26c-42a0-aaf8-d72db5fc2b22.jpg"
      ],
      order: {
        x: 0,
        y: 0
      }
    }
    const token = res2.data.token
    const headers =  {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    await axios.put(`/ads/${id}`, request, { headers: headers })
    alert("enviou") */
  }

  return (
    <ModalBS
        show={ show }
        onHide={ () => closeModal(false) }
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <div style={{ textAlign: "right"}}>
        <CloseButton onClick={ () => closeModal(false) } style={{ marginRight: "16px", zIndex: "1" }}/>
      </div>
      <ModalBS.Body style={{  }}>
        <h4 style={{ marginBottom: "1.5rem"}}>Ordernar Anúncios</h4>
        {/* <ReactGridLayout /> */}
        {/* <GridLayout /> */}
        {/* <div style={{ display: "flex" }}> */}
        <ResponsiveReactGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={128} //{281}
          width={1200}
          //onLayoutChange={layout}
          onLayoutChange={(e) => { setUpdatedGrid(e) }}
        >
          {
            adList.map(ad => ad.urls[0] ?
              <div key={ad._id ?? ""}>
                <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ ad.urls[0] }
                  alt={ ad.description }
                  title={ ad.description }
                ></Image>
              </div>
              :
              <></>
            )
          }
        </ResponsiveReactGridLayout>
        { console.log("ResponsiveReactGridLayout.length") }
        { console.log(ResponsiveReactGridLayout.breakpoints) }
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ textAlign: "center" }}>
            <Button style={{ width: "auto" }} onClick={ () => putAllAds() }>Salvar Ordem dos Anúncios</Button>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button onClick={ '' } style={{ width: "auto" }}>Publicar Anúncios</Button>
          </div>
        </div>
      </ModalBS.Body>
      <div style={{ textAlign: "center" }}>
        <Button onClick={ onHide } style={{ width: "auto" }}>Fechar</Button>
      </div>
    </ModalBS>
  )
}

ModalAdOrder.propTypes = {};

ModalAdOrder.defaultProps = {};

//export default ModalAdOrder;
