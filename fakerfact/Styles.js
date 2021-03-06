import Color from 'color'

const bgColor = Color('pink').fade(0.6);
bgColor.rgb().string()

const Styles = {
  container : {
    flex: 1,
    flexDirection: 'column'
  },
  horizontal: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  header : {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2a477c',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20
  },
  textLogo: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 4
  },
  body : {
    flex: 8,
    flexDirection: 'column',
    padding: 15
  },
  inputBox : {
    height: 40,
    borderColor: '#a7a7a7',
    borderRadius: 4,
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10
  },
  checkBox : {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50
  },
  buttonBox: {
    backgroundColor: '#3f7fee',
    height: 40,
    width: 80,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  graphBox : {
    height: 30
  },
  barBox : {
    height: 25,
    width: 345,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5
  },
  barText: {
    paddingRight: 10,
    fontSize: 12,
    paddingTop: 3,
    fontWeight: 'bold'
  },
  button : {
    color: '#ffffff'
  },
  checkingUrl : {
    backgroundColor:'#efefef',
    paddingTop: 10,
    paddingBottom: 10
  },
  checkingUrlText : {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5
  },
  waltSays : {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 20,
    marginRight: 10
  },
  errorBox : {
    flex: 8,
    flexDirection: 'column',
    margin: 20
  },
  errorOhno : {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  errorWalt : {
    marginBottom: 10
  },
  errorUrl : {
    color: 'blue',
    marginBottom: 10
  },
  errorPinkBox : {
    backgroundColor: bgColor,
    borderRadius: 4,
    height: 40,
    JustifyContent: 'center',
    paddingTop: 10,
    paddingLeft:10
  },
  errorMessage : {
    fontSize: 12
  },
  footer : {
    flex: .75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    backgroundColor: '#efefef'
  },
  footerText: {
    color: '#a7a7a7',
    fontSize: 11
  }
}

export default Styles
