import React from "react";
// @ts-ignore
import { WebView } from "react-native-webview";

interface WebViewProps {
  //   source: any;
}
const html = `<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <script
        src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"
        async
        defer
      ></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4NUH6R7uOutj3H5f2NYbzGX1um_4OlQs&libraries=places"></script>

`;

const WebViewComp: React.FC = () => {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        html,
      }}
    />
  );
};

export default WebViewComp;
