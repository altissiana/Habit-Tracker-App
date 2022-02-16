import React from "react";
import styled from "styled-components";

const ChoresStyle = styled.svg`
  cursor: pointer;
  height: 58px;
  width: 58px;  
`;

const Chores = props => (
  <ChoresStyle>
    <svg width="61" height="60" viewBox="0 0 61 60" fill="none">
      <rect width="61" height="60" fill="url(#200)"/>
      <defs>
      <pattern id="200" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#2" transform="translate(0 -0.00833333) scale(0.00195312)"/>
      </pattern>
      <image id="2" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13uGVFlbDx93YidAOSc85BkoiAAooICoZPBEFlBEExx3GU0RkDKmNAQUUUxTiCCqiIGBAwS5IsSk5KkAxNhu6+3x/VPTZNd997z11VO9T7e556GBh79ao6e5+9zt67qoaQnmwVYF9gT2BDYAVgSqMZjd0dwC3AWcDJwHnNpiNJUnstChwOPAQM96ydBqwfN1SSJPXDyqRfyU1fqHO2e4EXRg2YJEldNw24jOYv0CXa48DOMcMmSVK3nUDzF+aS7XZgmZCRkySpo7YFZtH8Rbl0+2zE4EmS1FUn0vzFuIn2EDA1YPwkqbMmNJ2AGrMI9b4UtziwW9NJSFKTLADqtRGwRNNJNOgZTScgSU2yAKjXyk0n0LBVmk5AkppkAVCvaU0n0LCa735IkgWAJEk1sgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgBQlJOBoYxtn3JdkaT+swCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgDqilnB8YaD40lSp1gAqCvuDo53R3A8SeoUCwB1xc3B8W4JjidJnWIBoK64DrghMN6ZgbEkqXMsANQlJwfFuRG4ICiWJHWSBYC65DPA9IA4H8KXACVVzgJAXXIncOg4Y5wFHB+QiyR1mgWAuubLwDED/tmrgFcSP6VQkjrHAkBd9Dbgg4ztQn4WsANwT5aMJEnqiL1Jz8Gj2kll0wdgS+CXpEJgQXldD/wbFruS9CSTmk5AGodLgBcCqwJ7ABsBKwL3kub5nwlciC/8SdJTWACoD24BvtZ0EpLUJd4WlSSpQhYAkiRVyAJAkqQKWQBIklQhCwBJkipkASBJUoUsACRJqpAFgCRJFbIAkCSpQhYAkiRVyAJAkqQKWQBIklQhCwBJkipkASBJUoUsACRJqpAFgCRJFbIAkCSpQhYAkiRVyAJAkqQKWQBIklQhCwBJkipkASBJUoUsACRJqtCkphOQgiwDbACsANwH3AJc12hGktRiFgDqsonAAcBBwPY89Y7WDcDJwGeAO8umJklSO+0NDAe2k8qmzxbAX0eZ23TgTYXzkySplbpcAOwBPDhAjkcDQwXzlKTW8iVAdc0WwInA1AH+7FuBQ2PTkaRusgBQl0wETmCwi/8cHwe2iklHkrrLAkBdcgCwyThjTAAOD8hFkjrNAkBdcnBQnN2B1YJiSVInWQCoK5YFnhUUa4j0IqEkVcsCQF2xHukdgCgbBsaSpM6xAFBXrBAcb8XgeJLUKRYA6orpwfHuC44nSZ1iAaCu+EdwvJuD40lSp1gAqCuuB64NjHdGYCxJ6hwLAHXJD4PiXA9cFBRLkjrJAkBdcgQx7wJ8iLQ3gCRVywJAXXIX8P5xxjgT+F5ALpLUaRYA6pqvAF8a8M9eBewLzIpLR5K6yQJAXfQ24F2M7UL+e2BH4J4sGUmS1BF7k56DR7WTyqYPpF39fkEqBBaU13XAv2GxK0lPMqnpBKRxuBh4EbAqaW3/jUkr/N1HWjfgTOBCfOFPkp7CAkB9cAvwtaaTkKQu8baoJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSwAJEmqkAWAJEkVsgCQJKlCFgCSJFXIAkCSpApZAEiSVCELAEmSKmQBIElShSY1nYAUZFlgA2AF4F7gVuDaRjOSpBazAFCXTQIOBA4CnsVT72jdBJwEHAHcXjQzSZJaam9gOLCdVDZ9tgKuGGVuDwBvKZyfJEmt1OUC4MXAgwPkeAwwVDBPSWotXwJU12wJfB+YOsCffTPwgdh0JKmbLADUJZOAExjs4j/HYcDWMelIUndZAKhLDgQ2HmeMCcAnx5+KJHWbBYC65KCgOLsCqwfFkqROsgBQVyxHmuoXYQjYMyiWJHWSBYC6Yl1ij9f1AmNJUudYAKgrVgyOt3JwPEnqFAsAdcWUlseTpE6xAJAkqUIWAJIkVcgCQJKkClkASJJUIQsASZIqZAEgSVKFLAAkSaqQBYAkSRWyAJAkqUIWAJIkVcgCQJKkClkASJJUIQsASZIqZAEgSVKFLAAkSaqQBYAkSRWyAJAkqUIWAJIkVcgCQJKkClkASJJUIQsASZIqZAEgSVKFLAAkSaqQBYAkSRWyAJAkqUIWAJIkVcgCQJKkClkASJJUIQsASZIqZAEgSVKFLAAkSaqQBYAkSRWyAJAkqUIWAJIkVcgCQJKkClkASJJUIQsASZIqZAEgSVKFLAAkSaqQBYAkSRWyAJAkqUIWAJIkVcgCQJKkClkASJJUIQsASZIqZAEgSVKFLAAkSaqQBYAkSRWyAJAkqUIWAJIkVcgCQJKkClkASJJUIQsASZIqZAEgSVKFLAAkSaqQBYAkSRWyAJAkqUIWAJIkVcgCQJKkClkASJJUoUlNJyBJLTcVeBaw0ey2IbDa7P++5Oz2BPAQcP/sdj1wNXAVcClwGTCrdOLSwlgASNJTPRN4MbALsC0wZYT//URgUWDZ2f++1Tz//3uA3wG/Bn4M3BKWqSSN0d7AcGA7yXzVcasB/wn8jdhjbd42Azgd2B9YvEjPpPnwHQBJtVsXOJZ02/5wYOPMf99EYDfgf4GbgI8AS2f+O6WnsACQVKt1gBNJz+oPASY3kMNywIeBG2b/c7EGclClLAAk1WYy8E7Sy3n70I7vwaVIdwIuB/ZsNhXVog0HviSV8gzgL8BRwLSGc5mfdYDTSO+o+FhAWTkLQFFWI/2aymW7jLFVh0OALwCLNJ3IKOxNmn3wKuDshnOR1DPRb9V3rTkLoB6LkT7vpo+5QdrjwFvih0TyEYCkfnsaacrd3k0nMqDJwJeATwJDDeeinrEAkNRXK5MW39mx6UQCvJ80VXFi04moP3wHQFIfLQX8Ati86UQCvYH0WOCNTSeifvAOgKS+WYz0Jv0WTSeSwSHAR5tOQv1gASCpT4aA7wPPaTqRjD4EvL7pJNR9FgCS+uR9wEubTqKAo3nqhkPSmFgASOqLZwEfazqJQhYhLWO8ZNOJqLssACT1wTTgBzSznn9T1iOtaCgNxAJAUh98GFiz6SQacCDw3IZzUEdZAEjquk1Jm/vUaIj0PkBNdz4UxAJAUtd9nrovgJsCb2o6CXWPBYCkLtsBeH7Bv+8G0tK8+5HWGViGtKDaYsCKs/N5M+l9hOkF83of3djkSFILuBmQ+uA08h8rs4BTgJ0Y23r8iwGvBS4vkOMwaZEgSRqRBYC6bnPSxTnncXIBaVve8ZgAHAzcmTnXa/GursbAg0VSVx1Evh3yhoFPA9sB548z1izg66RHBr8bZ6yFWRdnBGgMLAAkddEk0nP4HGaSNtx5PzAjMO6twK7ANwJjzuvfMsaW1BM+AlCXvZQ8x8Us4HWZcx8Cvp0p/wdIiyJJI/IOgKQuelmmuIcB38wUe45h0ta+52WIPQ3YJUNc9dCkphNQb9wMnJMx/mrA9hnjq1tyXOT+QLm9BB4nPcK4DFgiOPYuwKnBMSX1SPQjgNy31LuWr/JZm/hb548Dm5TsxGz/PmC+C2uXFe2BOstHAJK6ZucMMb8D/C1D3JEcTbp7FmkzYNngmOohCwBJXbNphphHZIg5Go+RljKONEQzdzPUMRYAkrpmw+B45wBXBscci+8SO90Q4sdIPWQBIKlrNgqO1/QLc/8E/hwc0wJAI7IAkNQ1awTHy7k632j9NjjemsHx1EMWAJK6ZArxu979NTjeIKJzWDI4nnrIAkBSl0TPmb+Hstv2LsiNwfGix0k9ZAEgqUuiL2xtuPhDfB4WABqRBYCkLnksON5dwfEGFZ1H9DiphywAJHXJHaTd+qLcGhhrPPraL7WYBYCkLpkJXBIY74LAWOPR136pxSwAJHXNKYGxfhIYa7z62i+1lAWApK45lpiX5n5DuzbO6Wu/1FIWAJK65k7g8HHGeBx4d0AukfraL7WUBYCkLvo0cOI4/vzbgEuDconU136phSwAJHXRMPA64Adj/HNPAG8FvhaeUYy+9ktSi+xN+rKJaieZrxowBLwJuJ2RP/PzgR2aSXPM+tovSS3QtQtq1/JVWUuQfjn/GLgGeJi0zO9fgK8Au5Muql3T135JalDXLqhdy1eSWs13ACRJqpAFgCRJFbIAkCSpQpOaTkCSVLUlgMWBqcDTSC86Pk6a2nj37H9XBhYAkqRcJgDrAxvM/ud6c/1zGWDJUcR4hLRK4t+BG4DrgL+SFjy6DpgVnnUlLAAkSVEmAlsCzwGeDewCLDvOmIsBa8xuz5nn//cQcA5w5ux2MRYEo2YBIEkaj2nAS4H9gOfN/vdSpgK7zm6Q7hT8lrQb4o/x8cFCWQBIksZqEWA3YB/g5ZS96C/M8qSc9iE9OjgN+F/g58DMBvNqJQsASdJoLU/acOgtwHIN5zKSxfhXMfB34BvA0aQXC4XTACVJI1sH+DxwI/Ah2n/xn9cawEeAm0j9WLXRbFrCAkCStCDrknYmvAZ4B2m6XpdNJfXjWuBLwJrNptMsCwBJ0rwWJ/1ivhx4Jf27VixKeoxxDfDJ2f9enb59qJKkwQ2RnplfAXyY/l8YJwPvJ60rsEfDuRRnASBJgnQ7/HfAiaRn5jVZB/gZ8ENgtYZzKcZ9pNPLLNsDGwEbklasWon0rGgao1upSmqTR4EHgemkveOvB64m/aq7CLiyudTUUnsDXwWWbjqRFpgOvB63DO+lCaTVqY4ELiHNDY3cZ95ma3u7FfgucAAWuLVbAjiW5o/JNrZjgSmDD63aZAPgcNJ80KYPLJutLe1h4Hhgd7wjWJstSGvpN30MtrmdT3o8oI7aHPgOMIPmDyabrc3tL8BrcYGwGuwG3E/zx1wX2r3A8wcbZjVlPeBU0sYQTR9ANluX2lWktd3VTweStttt+jjrUnuMtNeBWm4KaVrHIzR/0NhsXW4/BdZGfTFEmtvf9HHV1TYLeM9YB13lbEF6w7npA8Vm60t7iPRGtLrv8zR/PPWhHTbWgVd+ryV9WTV9cNhsfWwnA0uhrno7zR9DfWqfHNvwK5dJwHE0f0DYbH1vf6W+BWL6YBXSuhBNHz99a/8+lg+hjbo+7WcR0nzmvZtORKrEbcALgcuaTkSjdgzw5qaTWIjppOmoD5NmJixFWoRt6uzWVsOkO8/fbTqRQXW5AJgK/BzYqelEpMrcQ1o34IKmE9GIJgL/pB3b995CWmr4YtImPNeQ1iF4bCF/ZgqwPmmV1g2BpwPPBVbOmegYPEGaMfPLphOpyWTSxb/pW0A2W63tTtLy2Wq3bWjuGHkC+AVwMPGL6WxM2s3vFzS/xsuDpMJEBQwB36T5L0Cbrfb2d2B11GZ7U/64uIh0cV6+QP8gvePwXtJCVk2dC38jPbZQZv9F8198NpsttfNwvfQ2O5gyx8Es4HRg1zLdmq8h0pa+f6JMn+dt38nfxbrtRLqt1PSXns1m+1f7HGqrvcj/+f+R9KihTZ4HnEv5c+GgEp2r0fKkl0ia/rKz2WxPbrNw6eC22ox8n/s/gFfT3pfJJwCHAHdT7lx4CNi0ROdq822a/6Kz2Wzzb7fhQkFtNESeH07fpjtbSS8PfI9y58LZpOJDQZ6Dm/rYbG1vR6I2+hhxn/H9wP5l0w9TcrVYl88OMolm3+602Wyja0+Qtt9WuyxD2tJ2vJ/vFcRP5yttc+Bq8p8LdwHLFupTr+1P819sNpttdO1HqI1ewvjuop5NOxYTirAMqT+5z4WvlepQX00grT9e6svrEuATwJ7AunTnGZc0t0WBlYAdgXcBP6Pc/u+zcFGUtnoPgxUBJ5CWXe+TacCvyHsuzAS2K9WhPioxhWWYtO/5VoX6JDVheVJxW+IZ6AmF+qSx25vRvxX/GKmA7KsppOI457lwerHe9NAZ5P1wLsa9BFSXVYBvkPe8epxyq8Bp7JYGPgXczPw/v/uAY4G1GsqvpMXJ/zjgmcV60yOrkneN5xNJH75Uo1cDj5Dv/HpHua5oQEPAlqS7AocArwK2J714XZNlyPuo+ZRyXemPQ8n3gXyE9i5eIZXyHGLeDp9f+3PBfkjjtSb5FgyahbNjxuwC8nwYx5bshNRyu5PvTtta5bohjVvOjZO+V7Afnfc08nwp/QE3LpHm9W7yfOm5Lrq65mjynAtPACsW7EenvZz4D+Axur+IhZTLr4k/575btAfS+C0CXEWeIsD3YkbpKOIH/7NFeyB1y3bEL7d9c9EeSDF2J08B4Hsxo3QmsQN/P+lNT0kL9iPiv/Q879RFPyZPEbBZyU501YLmpw7avlo2famTcvzycSU0ddHa5Fk9839KdqKLphF/K/KFRXsgddNE4qcFHlC0B1KcbxFfAFxXsgMjaeOexasTO0d/BvDHwHhSX80kzZSJtGZwPKmUj5POiUjrkO4utEIbC4AlguPdCDwYHFPqq8uD40Wfz1Ip15Jnd8tdMsQcSA0FwE3B8aQ+uzE4njtqqsu+niHm8zLEHEgbC4BpwfH89S+N3vTgeN4BUJedAdwSHHNXWrIUfRsLgMnB8Z4Ijif12YzgeLVtLKN+mUX8Mr4rAhsHxxxIGwsASZLa4uQMMbfNEHPMLAAkSVqwC4D7gmM+PTjeQCwAJElasJnA74NjWgBIktQBvw6Ot35wvIFYAEiStHAXBcdbnfgX3sfMAkCSpIW7MjjeRFIR0CgLAEmSFu5O4J7gmCsGxxszCwBJkkZ2VXC8ZYPjjZkFgCRJI7sjOJ4FgCRJHRC9rPziwfHGzAJAkqSRPRAcb5HgeGNmASBJ0sgsACRJqlD0xlYzg+ONmQWAJEkji97a+tHgeGNmASBJ0simBcdrvACoYa/uFwHXNZ2E1BFTm05AaqmlguM9HBxvzGooAKYC6zSdhCSp06KvI7cHxxszHwFIkrRwE4G1g2P+MzjemFkASJK0cGsAU4JjWgBIktRyTw+O9zDxmwuNmQWAJEkLt1NwvKuA4eCYY2YBIEnSwkUXAFcExxuIBYAkSQu2JLBVcMwrg+MNxAJAkqQFewnxU+YvCI43EAsASZIWbN/geMPAecExB9LGAmCo6QQkhWn8RSdpHJ4G7BYc8ypaMAMA2lkATG46AUlhnmg6AWkcXk38tr1/Co43MAsASTlZAKirJgLvzhD3FxliDqSNBUAN+xNItZjRdALSgF4OrBcc8wngzOCYA2tjAeAdAKk/vAOgLhoC3pch7h+B+zPEHUgbCwDvAEj94R0AddGrgWdmiPvDDDEH1sYCwDsAUn94B0BdsxhweIa4M4CTMsQdWBsLAO8ASP3hHQB1zftJu/9FOx24I0PcgbWxAPAOgNQfFgDqkq2B/8wU+9uZ4g6sjQXA1KYTkBTmsaYTkEZpceB4YEqG2LcCp2SIOy5tvN2+RHC8L9LCyktqqXcDrwmM92BgLCmnzwEbZYp9DC18H6aGAuBK4MLgmFJfPRIcb3pwPCmHNwFvzBT7EeCrmWKPSxsfAUQXAA8Ex5P6bMngeJ5/arvdSXeKczkWuDNj/IHVUAD4C0QavaWC41kAqM2eDpxIvrvhjwCfzhR73GooAPwCkkYv+g6A7wCorZYFfkr8MT+3rwC3ZYw/LhYAkubmHQDV4pPAmpn/jj2Bg3B6+6jdQNpDPKrleqtT6qO/E3v+RW+mIkVYk/RWfuSxvrB2E/BO0lRDLcT9xA78KmXTlzptOrHn30pl02+VJYG1gE1I68o/c/b/vRZ5bztrZB+g3MV/7nYr6Y5AK+6+DzWdwDwWJX4a0qK4GIk0GosAjwbHXJz4c7ptJgHbADsCWwDrAxsATxvhz90HXA1cA1wK/J40ZdnVE/M7A9i1wb//IuBdwB8azKF11iC22mrNtotSB3j+jd5SpF9yvyC95xA1Zg8APwdeh3cJcrqJZu4AzN1mAd+n7rtkT7INsQN8Xdn0pU6LPv+uLZt+Ec8jTRt7hPwXiEeAH8z+OxXrLpovAOa0O4F983a3G/YgdmDPK5u+1GnR59/ZZdPPZgh4Cak/TV0kLgJeC0zM3NdaXEfzF/5524nA8jk7Pa9WvIgwlxWC47Vy9SWppaLPv1ZtfTqg7YALgFOB7RvMYyvSnibnAc9qMI++uKrpBOZjH+AyYOdSf2HfC4C7guNJfRb966PLBcBywHGkX/1bN5zL3J5Byuk4Uo4azJlNJ7AAK5Fye3eJv6xtBUD0AX13cDypz6ILgK7egXsu6a38g2nfTClI39sHA38Fdms4l646Hni86SQWYBJpZ8LvA9Ny/kVtKwCi34Zs7RKMUgtFr5nRtQJgAvB+0i+wLqwfsgLwS9KKdr4bMDa3k3cDoAj7kqYJrtx0IqX8jtiXKvYrm77UaX8g9vx7Vdn0x2Vx0rrwTb8INmg7FVeZG6uppLsoTX92I7UbSOtK9N71xA7cTmXTlzrtBmLPv13Kpj+wpYkvfppo5+J7AWO1NnAjzX92I7XbSe9/9NZE0jOZyEFbu2gPpO7Kcf51YR+A5YDLaf4LPqpdTvzL1H23EnAWzX92I7XpwA6ZxqBxqxE7WLNIywBLGtnq1Hf+TaYbX/xjbZcy8jLEerIh0jS8c2j+81tYu492zUoJ82xiB6rLU5Ck0nYg9vy7tWz6A3kfzX+h52pnAFPihqoqqwCvBo4mFVMzaP7znLvdCWyarfcNeRWxg3Rx2fSlTtuP2PPv3LLpj9mSpGnCTX+Z52xfDxutui0JvBT4FnAPzX+uw6QCe9yP2No0DXCN4Hj/CI4n9dmawfH+Hhwv2suAZZpOIrODSMsHa3ymk2ZZHAisCLwIOIFm1xFYmTRrZVyPetpUAER/AV0fHE/qs/WD47W9AHhh0wkU8iVgo6aT6JEnSGsvvIb0o/VQ4OaGctmItFnUpEEDtKkAiJ7n6E6A0uhFFwA3BceLtm7TCRQyjbSHQJu+6/viduBTpGPpHTSz8NVuwKcb+HvD3UzsM5I9y6YvddqtxJ5/Lyub/phdS/PPcUu2N8QMmxZiCeCjwAOU/3z3L9C/bKaRpg1FDsjGRXsgdVeO82+Loj0Yuwto/qJcst2NiwSVsjLwY8p+vg8QfxevmGcQOxizgMWK9kDqrq2IPf9m0v5laX9ImS/mB4G/AOfPbn+Z/d+aKAI+GzJyGq19SI8FSn2+55PWtuic1xA7EE29lCF10SuJPf9uKJv+QN5Eni/hx0lvjL+Ohb9nsO7s/81PiV+BcUHtAWDZsQ+VxmFl4PeUKwIOK9OtWIcROwi/LZq91G3/Rez598uy6Q9kJeBh4vr8MOllrEF2blsZ+ExwPgtqHxkgP43PZOBIyhQAM4BtynQrzg+IHYRjyqYvdVr0+XdU2fQHdgQx/T2dmH1H1gF+FZTTgtpdwCIBuWrsXgU8Sv4i4M90bHvoS4kdgHeUTV/qtOgtUd9SNv2BLQVcweD9nEW6exI5xW4C8N/Ev5Q5d9srMF+NzXOB+8lfBHTlHGQK8Bixnd+1aA+k7lqEtLhJ5PnXlW2AIa0/8k/G3sfHgAMy5nUg6WXKHBeHH2bMWyPbhvwvB97PYI+jituS+M6vUrQHUndtjeffGsCFjL5//wSeUyCvt44hp7G0R0h3P9Sczcm/r0An9oI4kPjKR9LoHEDs+TedtLVq10wG3gjcyIL7dh/wCcputXvcQvIZT2v7Qk012I68U0Jn0IFloKPfjjynbPpSp32G2PPvvLLphxsirYvwNtLF/rPAu0mPNZqYY704aVpl9MXhyJKd0AK9hPhHcHO348t1ZTC/IbbDx5VNX+q004k9/44tm34V9iL+wuB26e3xLvIVADOBp5frytgMEf8c5G1FeyB11xBpWljk+femoj2owxBwGfEXhqklO6EFGgJOJl8RcFK5rozN2sR39tlFeyB11zrEn3/bFe1BPd5I/GfV9v0aarIEcCV5CoAZLGCdiqa3iNwyON4sUqUsaWTPDI43k7TWveKdRPoijxS9BbsG9wBpSfzozxjSokDzvTPXdAEQ/QV0LWkgJY0s+vy7GngoOKaSe0hTFSN1dve4nrqQfKtovoH5PPJpugDYPjjeJcHxpD6LLgA8//I6Nzje8sHxNH4fJs9mWkuTliJ+kiYLgEnEb1rgm63S6EwgTXeLZAGQ19XB8ZYIjqfxe5h8y/geOO9/aLIAeDowLTimX0DS6GxM/AXg0uB4erI7g+NFf/8qxi+BX2eIuwOw1tz/ockCYIfgeMOkXZAkjSz68dswcEFwTD3ZI8HxFg+OpziHks6pSEPAK+f+D30qAK4G7g6OKfXVTsHxPP/yi75gPxwcT3H+DJyWIe5+c/9LkwVA9C+Q6BdkpD7bMTje2cHx9FQrBMdzxlS7fSJDzK2Adef8y6QMf8ForMgCFiYYh66vQT5aKwH7k77ANyEVcQ8CfwPOJM0Xnt5Ydu3yqiUyDgAAEhFJREFULNIyqs/mX1tj3kaaq/5D0nO2Wc2k1qjVmedZYAAL8Pw2DI5nAdBu55HuBETP1nkBcF1wzDHZm/jVjqLfaG6bJYAvAY+y8HF4EPhvYEozabbC5sAfGPmYuQbYvaEcm/Rq4s+/1q433iMXEPuZHVo2fQ3gQOLP1caXBj6G2A49SHN3M0rYjFSxjWVMLiL+lmEXHMLIRdK87Ui6uYXtoL5M7Pl3P82vKdJ3K5BWiYv83PYq2gMNYjHi9+u4m7Q6YGOi1zz+Tdn0i1qfdNt6kHG5Ali2fMqNOZh0S3+QsfpSA/k25a/Enn+/Kpt+ld5O7Gc2jHdtuuJrxH/20WvwjNpqo0xwLO1jRXtQziTS8pDjGZuTi2fdjM2AxxjfWO1bPOvyVmTwImlB7aNFe1CfCcT/aJpB+nWp9tuD+Gvmu4r2YC6vHWWCY2m7Fu1BOe8gZnxeWDrxBvye8Y/T7fT/S/E1xJ9/Nb5HUdL+xH9mrpnSHYuQHrNFfv7fKtmBuX1rhMTG2h6jnwtaDBFX9Z9ROPfStiDueDqkcO6lfZPY8+9xXFI2pyWBW4gvAD5TshMatx8Q+/k3tmru30eZ4Gjbn8qmX8yziBujGcBSZdMv6gjixurnhXMv7WY8/7rku8Rf/IeBPUt2QuP2VmI//8eBRUq/ubs+aQ5ypN8Fx2uLlwTGmghsFxivbV4cGGsH+jsjYBNg1eCYOdYsV3Io6ZFNtIfp7/dmX0UvtDUZ2KR0AbBbhpi/zRCzDfYIjrdicLy2WJfYBVKWIj1z66MXZIhpAZDHa4DDM8X+CWnqtLrjMuI/s/VKFwDRt52eoJ9LkK4CbBkcs68XtRy3Mvs6VtEFwCPAOcExlVZ+O458d6JOyBRX+cwkzQiLtFrJAmAq8LzgmOfSz0r2RcSf/P8IjtcWLwqON51+LqW8KLBzcMw/kRZdUpwh4CukzyuH24HTM8VWXlcHx1u9ZAGwK/EHdV8P5Ojb/5AWf+mbxYHnBsf8G+klmb7Zhfj93739H+9lwNYZ4x9FunOq7rkhOF7ROwCRL2rN8csMMZs2GXh+cMzr6ecdgOcTX1T29aL20gwxz8oQs3Y5F6OaTrq7oG6K3sBnteB4CzRE/FzWO+jn+uO7ED/l5/NFe1BO9J4Sw8Rvk9sGQ8RP/7uXfu+/0ZQ7yDPtbxj4eMF+KN4ziT0eit0VfkZw4sPA8aWSL+wo4seqjysBDpHuakSO0z3086K2DfHH1PeL9qAOi5Hv4n8b/V4LpAYbEHtM3FDqF3TknPY5+nj7fwh4eXDMR+jnnN/tiL+F9SvSokl9k+P2/08zxKxdzhUV30taTlbdFf3Ce7Flzy8mtnKZBaxUKvmCtiW+8v9Z0R6U8xnix+rAkh0oKPr8m0Fdu0yWMok03Sv6uP4t/V3cqiZLEXtcFJnttH5w0sPA+SUSb8CniB+rtxbtQTnXETtOfS0q1yb+mPpj0R7U5WpiP6t7gLVKdkDZTCL22JhR4hHAPhli/iRDzDbYK0PMPq5tvxWwTnDMC4F/Bsdsg1dmiHlahphKos/Xg4Ebg2OqGVOC480KjjdflxL/C2SzEokXFrmj3ZzW2I5PmX2c+LH6YNEelHMR8WO1adEe1GUL4h4DHFU4d+W1IrHn8QO5E45+a3GY+MUQ2uIw4sfqw0V7UM6cxXoi2yZFe1DGusSP040lO1Cp7zH+z+kU0iZg6o/1iD2X78qd8AeDEx4GjsyddEP+SvxYRe8n0AabED9O0UtstsUHiB+rLxbtQZ2WAa5h8M/oHNIqmeqXrYg9l2/KnfAlwQkPE7+fQBtsSfw4XV+0B+V8gvix+nTRHpST4/zbtWgP6rUpg61zcTawdAP5Kr/oReIuyplsjtv/d9PPhVqOIH6sPle0B2UMkR4BRY/VDiU7UciGxI/THfTz/GurlUhLU4/ms5kJfJn+7mQpOITY8znrXjofDU52GPhGzoQbMpH4ZZKHgZ1KdqKQHYkfp1vp55LSHyF+rFxHvhkvBs4EHuOpn8l9pHcGNm8sO5XyWWLP5+NzVfNDwGszxP1BhphNex6wSnDMf5K2au2b/TPEPIVC02EKynX+nZQhpkZ22uy2JGkG1AqkxZhuAy7D3f1qsWFwvBuD4/2f5xH/6+NO+nn78VvEj9UXSnagkCmkt1ajx6qPm//sTPw4eftfatZ4XgydX3tDrkS/FZzoMP28/bgY6RZe9Fj18Zn2XsSP0y308/b/N4gfqy8X7YGkuS1NuusTeU6/IEeiU0kLDER/AT0/R7IN24/4cbqJfq77/UPix+qzRXtQxlTSGt+ef1J/vJz4c3rVHIkekCHRvt5+/BXxY/Wpoj0oYzngUeLHapuSnShkfzz/pL75ArHn9N25Ej0rONFh4Eu5km3Q2uTZ+Wvrkp0o5L3Ej9O1RXtQzhnEj5W3/6VmXU7sOf2bHEmuRZ6L2vY5km1YjvXsryragzKGgCuJH6uPl+xEIbmKyj6ef1JXrEqaqRR5Th+RI9Ecq7RdTf+eaU8iz9z//y7ZiUJ2Jn6choGNS3aikMPx/JP65j+IP6//X3SSU0jzz6MT/a/oRFvgZcSP0yzSL8C++S7xY3Vu0R6UMZm0qFH0WH2gZCckPUWOHXVXik4yxxvtfb2onUb8WJ1VtAdlPA14iPixenPJThSyL/HjNBNYvWQnJD1Jjn1irsiR6O8yJPqbHIk2bDXi53MOk2flt6a9g/hxegxYtmQnChntmvFjaWcU7YGkeR1J/HkdvqNuji1ah4GDohNtgRx7JDxAmv/dJ0Pk2SK5j8tJb0D8S0LD5Fl6WdLoLAXcS/x5vVt0ol/MkOSDpLWv+2QR4Hbix+qbJTtRyG7Ej9MwsEfJThQSvUnIMGkxIfeUF6RHce8ETiVtUXwfaR75uaS3yfu4nkYbfIg85/WikUlOI89ytsdFJtkSB5LnorZzwT6UkuM9iVvo34I208jzK+HrJTuhVppEmll0PyMfLz8j3YlSjCVIRVb0eX18dKJvypDkMLBtdKItcBHx43QF/ZumtQF55rN/rGQnCnk7ec4/5/7XbQXG/l7XdGD3JpLtofeR57x+aWSSE0gXoOgkL4lMsiV2Js8H+q6SnSjkaOLHaSawZslOFDCBtKKh558iTQXOZ7Bj53Fgl/Ip98pK5Lmrfg/pMXSYHBsUDANvjEyyJX5E/Dg9DCxTshMFLMnobjmOtZ1ashOF/D/ynH/ZtglVJxzH+I6f28gwz7wiOdY+GSbDNvF/zJDkA/Tv5b81yTP175slO1HIe8hz8O9ZshOF5Jh6O530/FF12oaYx2+nlE68J55Lnhk9w8DmkYlulynJr0Ym2RKfI89Y9e057STgeuLH6UZgYrluFLE1eY6pL5bshFrnm8QdS/sVzr3rFiXP1Odh4JzoZE/OlOhW0Yk2bBnSXY3ocerjc9rXkOeY+mDJThSS6zbhpiU7oVaZROyMkjuAVYr2oNu+TJ5zehjYJzLRtclzS/t3kUm2xIfJ84G+vmQnChgCLiN+nB6lf88j1wGeIH6sfluwD2qf9clzTPXt7lsOryTfxf96gj+DHG9pDwN7RybZAlOBO4kfp7uAxQr2o4SXkOeY+nbJThTyFfKMlbds6/YC8hxXfdx6O9L65HnxeU4L3ftkJdLb59FJ3kT/Fml5F3k+0MNLdqKQP5FnrLYu2YkCViHd1Ygep1tIO3qqXjuT5xycBbyqYD+6ZGngcvJd/G8keOpfjmVHh0l7HvfJZFJREz1OT5A2FOqTXF88fXyklOv8O7RkJ9RKm5LvQvQI8OxyXemExcgzk27uFvqoeDnyvND2EP3boe0g8nyg3yvZiUJ+QZ6x2qtkJwrI9ULpg/Tv/NPYTSAtFpPrYnQ3sEWx3rTbJNLaJDkv/leSfoiG+XSmRI+NTLIFJpIGP8dY9W3q3zPIM+/1Rvr38tFh5DmmjirZCbXa8eS9KN2BM00mAd8h7zgPE7zx2fKkXwrRSc4ENoxMtAUOIM8HGj6XswV+Rp6x+veSnShgafJs+vMEsFa5bqjltiDfQjRz2u30792c0VqM/L/8h4GfRyf+P5kSPTk60YZNJs/67MOkpV/75Jnk+bK5h/6tZvcJ8hxTJ5TshDoh912AYdKKk7uW6lBLLE3+Z/7DpJf0149MfFnSB5Yj2e0iE22BQ8gzTleSntH1yZnkGau+7fq3HPnOvz7uuqnxWZ50qz73heox+rnvy/ysT963/edu4S/05vr1/+voRBu2CHne/B8mvVTYJzuTZ5weJm1l2ie53vz/TclOqFP2o8zFahj4GsFT1VpmX/LO85+7XUzwi3+rkN7Sz5Fs3/aOfht5xukf9G+O9u/JM1ZHl+xEAauSZ92NYYJfElLvnEKZi9YwcCnw9DLdKmZR8i7vO297mAwvWH4tU7KXkJZ/7YtFgZvJM1bvLtiPEnYjzzjNANYt2I8SjiHPWF1Iv84/xVuefN9p82uPktaD6cOCcM8l38Y+C2pvi+7ERuRZc3yYdFukT/6DPON0NzCtYD9yGwLOJ89YfbdgP0pYm/ScNMdYvbRgP9RdO5LvGrCgdtnsv7eLViJ9D+WeSTFv+wkZCvofZUr2r/TrhbalSRfqHGP1XwX7UcKryTNOM4HNCvajhO+TZ6wuxl//Gr3/pOzFbJh0AT0R2LhA/yIsAbwfuI/yY3U1sFR0h7YlXxXTt1//nyfPON0LPK1gP3KbQr4pkn2bzpbz/Ht5wX6o+yZQ9n2AudsM0oZebX0/YGngQ+T7AThSe5BMY/PrTAn37df/OuTZnGWY/v36fy95xqmPv/7/QJ6xupx+nX8qYyrpvZEmLnLDpGL4DNKjq9C33Ae0JXAk5d7un1+bQaZHeS/OmHTffv2fSJ5xuhtYsmA/cluGfOuM921/hJeT7/zbp2A/1C+rkGYkNXXBm9PuIN11fTZll/telfQj5rKgfoy3vT1HJ6eQbx37vv36fxb5btP27df/58gzTn379T8ZuArPP7XTljTznHtB7U7gf4HXkV5aj3y3ZWnS6qtfoNwiPqNtnwrs55Pkuk07TP9+/eda1rFvv/5zPibp26//t5Pv/HtlwX6ov7Yn38qUEd+dvyZNn3078LLZ+a5BuqDPWSJ8cdKCYeuQNiTbhbSK6xHAacA1pFvsTfdnfu0YggqdeYOsSPr1Ef5GoaRGXcK/dl6UxmtH0jbeU5tOpDLfJq0KG3Iez3s78JN48Zf66D/w4q84fyC9gPZg04lU5CsEXvzhyXcAnkFaoMVnhFK/nA68sOkk1Evbkm6ZL990Ij33adImP8ORQYfm+ufZ9G9nPql2w8A2wEVNJ6LeWodUZK7XdCI9NJO0FPwXcwSf82t/f7z4S330fbz4K6/rSbt7/rnpRHrmIWAvMl38If3ynzPtb+1cf4mkRjwObAJc13QiqsIipN04X990Ij1wLeni/5ecf8kE4BV48Zf66Ct48Vc5jwFvAN5CKj41mFNJj+2yXvwhFQCuCy71z/3AJ5pOQlX6MukCdlnTiXTMo8C7SIsP3V/iL5wAPLPEXySpqMNIS6ZKTfgL6b2yLxL85npPXUIqmuZsLFfEEKnqWKTUXygpuyuBzUn7uEtN25V0V8BZAk/1CKlY/ywNnK/O+Zf65z148Vd7nEnasvbDpAuekl8CW5AW4GvsfL2e5tc2ttlsMe1UpPZaB/gR+TZR60K7EthjvAMZYQJwQdNJSArxGOnXv9RW15Omt20JnNRwLqX9g/SS3xbAzxvO5f+8iuYrIpvNNv72SaRu2Yl0K7zPdwSuI02NnBI0ZmHmLAR0LbB6w7lIGtytpP3QH2g6EWkAm5B+He8PLNZwLlHOBT5HeuQxs+FcFuoVNF8l2Wy2wdsrkLpvOeCdwIU0f04N0u4BvkCahdMpX6D5wbPZbGNvRyH1z2bAp4Craf4cW1ibDhxP2h65s1PqJ/CvRQhsNls32lE4nVf9twHpBdezgIdp/ry7AjgS2A1YNGO/sxqaz397Bem5xRqFc5E0en8nbRP6o6YTkQqbAmwNbA/sAGwFrAVMzPT33UNa1vgi4I/A2cDtmf6uouZXAEAa4L1IaxJvC6xEf17MkLroEeA20parPwJ+jIv9SHMsCmxIehF2PdI1axVgxdltUWAqMBmYNvvP3Dv7nw8Cd5OWzr6TVFzfCNxA+qV/c4kONOH/A2HzfSmwlvwtAAAAAElFTkSuQmCC"/>
      </defs>
    </svg>
  </ChoresStyle>
);
export default Chores;
