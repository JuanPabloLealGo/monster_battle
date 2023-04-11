import styled from "@emotion/styled"
import { Card, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px',
    width: 'calc(307px - 22px)',
    height: '415px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
}))

export const BattleMonsterTitle = styled(Typography, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: centralized ? '36px' : '22px',
    lineHeight: centralized ? '42px' : '25px',
    color: colors.black,
    padding: centralized ? '0px' : '14px 0 5px 0',
    borderBottom: centralized ? 'none' : '1px solid rgba(0, 0, 0, 0.1)',
}))

export const ProgressBar = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
}));

export const TitleSkill = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    padding: '11px 0 5px 0',
}))