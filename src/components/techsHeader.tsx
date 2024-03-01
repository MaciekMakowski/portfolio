import { Box, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import Express from "../imgs/techs/Express.png";
import cssLogo from "../imgs/techs/cssLogo.png";
import figmaLogo from "../imgs/techs/figmaLogo.png";
import htmlLogo from "../imgs/techs/htmlLogo.png";
import muiLogo from "../imgs/techs/muiLogo.png";
import pyLogo from "../imgs/techs/pyLogo.png";
import reactLogo from "../imgs/techs/reactLogo.png";
import tsLogo from "../imgs/techs/tsLogo.png";
import leftTop from "../imgs/theme/leftTop.png";
import mobileTop from "../imgs/theme/mobileTop.png";
import rightTop from "../imgs/theme/rightTop.png";
import BackButton from "./backButton";

type TechsHeaderProps = {
  setOnExit: React.Dispatch<boolean>;
};

const TechsHeader = (props: TechsHeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("xs", "md")
  );
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const handleOnClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        width="100%"
        display="flex"
        sx={{
          justifyContent: { xs: "center", md: "space-between" },
        }}
      >
        {isMobile && (
          <Box
            flexDirection={"column"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              display={"flex"}
              minHeight="10rem"
              width="20rem"
              sx={{
                backgroundImage: `url(${mobileTop})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <Box
                marginTop={6}
                display={"flex"}
                flexDirection={"column"}
                gap={3}
              >
                <BackButton setOnExit={props.setOnExit} />
                <Typography
                  variant={"h6"}
                  color={theme.palette.text.secondary}
                  textAlign={"center"}
                >
                  MY TECHS
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} gap={3}>
              <Box
                onClick={() => handleOnClick("react")}
                minHeight="3rem"
                minWidth="3rem"
                sx={{
                  backgroundImage: `url(${reactLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => handleOnClick("ts")}
                minHeight="3rem"
                minWidth="3rem"
                sx={{
                  backgroundImage: `url(${tsLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => handleOnClick("html")}
                minHeight="3rem"
                minWidth="3rem"
                sx={{
                  backgroundImage: `url(${htmlLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => handleOnClick("css")}
                minHeight="3rem"
                minWidth="3rem"
                sx={{
                  backgroundImage: `url(${cssLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Box display={"flex"} gap={3}>
              <Box
                onClick={() => handleOnClick("mui")}
                minHeight="3rem"
                minWidth="3rem"
                sx={{
                  backgroundImage: `url(${muiLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => handleOnClick("figma")}
                minHeight="3rem"
                minWidth="2rem"
                sx={{
                  backgroundImage: `url(${figmaLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => handleOnClick("python")}
                minHeight="3rem"
                minWidth="3rem"
                sx={{
                  backgroundImage: `url(${pyLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
              <Box
                onClick={() => handleOnClick("python")}
                minHeight="3rem"
                minWidth="3rem"
                sx={{
                  backgroundImage: `url(${Express})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        )}
        {isDesktop && (
          <>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              minHeight="10rem"
              minWidth="25rem"
              sx={{
                backgroundImage: `url(${leftTop})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <BackButton setOnExit={props.setOnExit} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Typography
                variant={"h3"}
                color={theme.palette.text.secondary}
                textAlign={"center"}
              >
                MY TECHS
              </Typography>
              <Box display={"flex"} justifyContent={"center"} gap={3}>
                <Box
                  onClick={() => handleOnClick("react")}
                  minHeight="3rem"
                  minWidth="3rem"
                  sx={{
                    backgroundImage: `url(${reactLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />
                <Box
                  onClick={() => handleOnClick("ts")}
                  minHeight="3rem"
                  minWidth="3rem"
                  sx={{
                    backgroundImage: `url(${tsLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />
                <Box
                  onClick={() => handleOnClick("html")}
                  minHeight="3rem"
                  minWidth="3rem"
                  sx={{
                    backgroundImage: `url(${htmlLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />

                <Box
                  onClick={() => handleOnClick("css")}
                  minHeight="3rem"
                  minWidth="3rem"
                  sx={{
                    backgroundImage: `url(${cssLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />
                <Box
                  onClick={() => handleOnClick("mui")}
                  minHeight="3rem"
                  minWidth="3rem"
                  sx={{
                    backgroundImage: `url(${muiLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />
                <Box
                  onClick={() => handleOnClick("figma")}
                  minHeight="3rem"
                  minWidth="2rem"
                  sx={{
                    backgroundImage: `url(${figmaLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />
                <Box
                  onClick={() => handleOnClick("python")}
                  minHeight="3rem"
                  minWidth="3rem"
                  sx={{
                    backgroundImage: `url(${pyLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />
                <Box
                  onClick={() => handleOnClick("python")}
                  minHeight="3rem"
                  minWidth="3rem"
                  sx={{
                    backgroundImage: `url(${Express})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
            <Box
              minHeight="15rem"
              minWidth="25rem"
              sx={{
                backgroundImage: `url(${rightTop})`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default TechsHeader;
