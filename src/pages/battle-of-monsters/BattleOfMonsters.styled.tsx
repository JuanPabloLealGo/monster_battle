import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"
import { colors } from "../../constants/colors"

export const PageContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
  maxWidth: '820px',
  margin: '0 auto'
}))

export const BattleSection = styled.section(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '25px'
}))

export const StartBattleButton = styled(Button)(({ disabled }) => ({
  background: disabled ? colors.lightGreen : colors.darkGreen,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '21px',
  color: `${colors.white} !important`,
  padding: '12px 30px',
  textTransform: 'capitalize',
  '&:hover': {
    background: colors.darkGreenHover
  }
}))

export const MonsterImage = styled.img(() => ({
  height: '178px',
  width: '100%',
  borderRadius: '7px',
}))

export const BattleResult = styled(Box)(() => ({
  border: `1px solid ${colors.black}`,
  height: '61px',
  backgroundColor: colors.lightBlue,
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '22px',
  lineHeight: '25px',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '28px',
}))