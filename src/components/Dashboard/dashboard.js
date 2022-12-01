import React from 'react'
import styles from './Dashboard.module.css'
import './main.a6d9b6fb.css'
import feedbackImg from '../../Assets/images/feedback.png'
import { Link } from 'react-router-dom'

const DashBoard = () => {

  return (
    <>
      <div className="dashboard-container" style={{ marginTop: '66px' }} >
        {/* <div className="w-1/5">
          <div id="MerchantSidebar_drawer__vIf85">
            <div className="flex items-center flex-col text-center p-0" id="MerchantSidebar_profile__jyaVe">
              <img src="./Assets/images/profile.png" alt="" />
              <div className="pl-3">
                <h3>Wade Warren</h3>
                <h4>Merchant</h4>
              </div>
            </div>
            <div id="MerchantSidebar_menu__D9V5g">
              <h3>MENU</h3>
              <ul>
                <li className="flex items-center">
                  <img className="w-4"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFAAAAWFhYWFhYWVlZWFhYWVlZalhWhAAAAAZ0Uk5TAGCA/yDfJ70Z7QAAAEtJREFUeJxjYFQCAkUGBiEQLcAgbAwCAoxgypBBGUwrMIEpI7pzWYJBVAiMywAF+LlQL8D0Qj0IMxkKcHDRFEONor1/oRbBgh01UgABLTtC8LKZEwAAAABJRU5ErkJggg=="
                    alt="" /><span className="pl-4">Dashboard</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAMAAABMOI/cAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAUFBQVVVVWFhYWVlZWFhYVlZWWFhYWlpaWlpaWVlZWVlZWVlZWVlZWFhYWlpaWVlZWlpaWFhYV1dXWVlZWVlZWFhYWVlZWlpaWFhYWlpa3keDgAAAABt0Uk5TABAwYHCAUEAwf7//z48gn1/vn5Cv36BQb7/P/5tj5AAAANRJREFUeJyFktsSgyAMRAMIWAS8ALX2/z+0RJQS60z3xXEPEzarAEWMi05KqTSDRv3DDFXW+cP2jVs07miay8ElSBmiLWgCUPg0oo5mIqKjIR+xGoh8ykchUw4X8WwiSJ762h5gGGJ7RwkJNX50UrrFnu8Intc9zAHAB9u4ksEJcLRec1Wd6PfLGkB1gO7qv85UI1lRmyZucorn6cwrl75xb4XA00XmoGsqtoYNV5lTDPhx/8VlV98j2O5rf4O+r10BiJvaZ7FP/K29/lm0dlIQrT3rA/RrEmb9m5siAAAAAElFTkSuQmCC"
                      alt="" /><span className="pl-4">Master Data</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAF1QTFRFAAAAWFhYWFhYWlpaWVlZWlpaWFhYWlpaWVlZWFhYWlpaWFhYWFhYWVlZWVlZWVlZUFBQWVlZYGBgWFhYWFhYWVlZWVlZVVVVV1dXWlpaVlZWWVlZWVlZWlpaV1dXO8exHQAAAB90Uk5TAECf7/+fIDDff3+/YHDP7xBQEKCAkK8wcIBQv4+vkHyG+VgAAADvSURBVHic5ZLRUsQgDEWTNu3iWpHadKuu+v+fuSEkdQq+6Iwvep8OcAduEgD+ibDrqR9GoVMwaHRHRWfhe4dKE7ke5FKHSoEoIpwi0WPSVYGDZqKQ9556IgRY9CqsTEy0KqxErEtS+L4JLUKSNDPARU1zZcpZ4gYowQNY8NBU97y3YALYHGqxeV6EB4dG4yJj6XLZGAx+prRNzPyK3uax7jfg+boHj2+bmoKBWz4d5pvUZaDvvNtJ98F8iWUxJPsLQ3k1XyPFeIQ063SvgtEhz5/WY8hxKV9g3f+CNLFrSq3HzO20ffNg+lK/ZPrLugFPSQ2CH3nScQAAAABJRU5ErkJggg=="
                      alt="" /><span className="pl-4">Profile Management</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFAAAAWlpaWlpaWVlZW1tbWVlZWlpaWVlZWVlZWFhYWVlZUFBQWFhYWVlZWFhYWVlZWFhYWlpaWVlZWFhYWFhYWlpaV1dXWVlZXFGiYwAAABh0Uk5TAH/v/4+PgO/Pv68QIN9gcECvv5+AMK+QFHyZPAAAAK9JREFUeJzF09EOgjAMBdDKVOaggKO6//9TQ2rMunUlMRjvE4WThZYC8K+cOlelO0tzqcmWq0DKOVt6gbIH/pYVOgoDwBhshFx6E01cziZauFxMNHM5FYivPq3xTTSRCyPAcC+7K5Bz0WdFC4noCFeigCaK7xE8nm2UfXRqIbEYpCMU4+XtqVCSKKkokkj8bk4768uIdJQEgqT9UgQS2TkOqX2VSO2rOkrra/8FfpYX/WQKM1lnuoUAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Govt. Pay Management</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAMAAABzP0xhAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFRQTFRFAAAAWVlZUFBQWVlZWVlZWFhYWVlZWFhYWlpaWlpaWVlZWVlZWFhYWlpaVlZWVVVVWVlZWlpaWlpaWlpaWFhYWVlZWlpaWFhYWFhYV1dXWVlZWFhYALS+XQAAABx0Uk5TAI8Qv/8g30Dvb3CQgIBQMM8wf59gUB9/n6+voFrdCeYAAADRSURBVHichZLZEoMgDEUjBrBKq1Zbbfv//1kIi8tguC8w4UDOAABcKnaVImosMlJhEdINFqEbYhGqsAhZZcSWh5xyo4GFnLKSwEJOuRbAQk65o9kl5JWBhYIyC0VlDkrKPsYYTvkypHznGVJ+HCq2Xc8oe6XtMjblYceMrdSKavoZTzsru94pSuSVp7Dsh3vcNpiYPpUEyMGNY/jLu8zUz07c67zs+I5/+QwtocsSC5n4Hz7NU3LKRB/O1nkIumb9EFB/maeyd/OzzEozJm2S/gNisghjPu1AKgAAAABJRU5ErkJggg=="
                      alt="" /><span className="pl-4">Rule Engine</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAMAAACXfxyGAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGBQTFRFAAAAUFBQWlpaWVlZWVlZWFhYWFhYWVlZWFhYV1dXWlpaWVlZWlpaYGBgWlpaVVVVWlpaWVlZW1tbWFhYWFhYWVlZWVlZWlpaWFhYV1dXWVlZWlpaWVlZWVlZV1dXWFhYa2NtoQAAACB0Uk5TABB/z/9gIN+AcIBwzxBvMJ+/j59AUK8wf5CQH4/vr78bvT8YAAAA5UlEQVR4nJWS2RbCIAxEwaY2irVicavb//+lE0y15cQH88JyYZgkODeGX1REVe3sWDaUo1maWCm4N2gNwN6vMKwNjHeDjEy0MTBuZdEWk//xKL61xfEmBe9ByUq9/SZm0LIszFweqKWonA12ONeZKk4NFtXxXR1YzO9iiPmZXYh7ZbrTwwNNQ2CK4+rg3FHGKrlTpfislvsLi+tBmyapHt+9ohg+bYT6kCc4d83ljGlagDnG3dkHuam4h/g+44LCWvexNs0DqqlIbLq6Q3WI/KC33Wc/x6RlGuTn/a65tCT9xu3Y0Bc/IQnAB0iP/AAAAABJRU5ErkJggg=="
                      alt="" /><span className="pl-4">User Management</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAMAAACP+FljAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAAWFhYWVlZWVlZWVlZWlpaWlpaWlpaWVlZWVlZVVVVWVlZUFBQWVlZWFhYWFhYWVlZYGBgWVlZWFhYWlpaV1dXWlpaWlpaVlZWWVlZV1dXWFhYWFhYW1tb6ttMKgAAAB50Uk5TACCP38+fMO//7zBwEFBggL8Qr0CvcIB/UJCQv5+Pxcr4ewAAAPpJREFUeJzdkt1ygyAQRiGL8iUYICFtarXv/5oFEfnRZnLdvXE8nFl2l2XsneAnEh3/m/QSPs6XfN4QAilFOA+bUJMr4JNxCZ3OG2Jgw0fAJKEhKqainKEhN4n7xT2WtOyQfGCJz9xFSzQBQrMidmSoxlST4WlTuEi+NnAK3RK2oDSmTAY2Qn6bGIBa7gdWYKSvc8rzGZf2fco5E1sKvv0fxjrQVp+phdA+58gT3Qm+PNulUg8FFyrXLwT/lys8FHjxZKtwh5hVRmOR4DkLL4SHsxneigRTLEiLKFx1n0567aIQH3RdsGm3con8F4HC9lApVMSlBXRJKMkvH7kVKduAvHEAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Patner Management</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAF1QTFRFAAAAWlpaWVlZWlpaV1dXWVlZWlpaWFhYWFhYUFBQWFhYWVlZWVlZVlZWWVlZWlpaVVVVWFhYWlpaWVlZWFhYWFhYWVlZWVlZYGBgWVlZWFhYWFhYWlpaWFhYWlpafOcVVAAAAB90Uk5TAH+/b3D/gL+AEGDP31BQ7zBAMHB/IKDvEK+foJ+wz0WIEngAAAECSURBVHictdPRloIgEAZgm21WIMrIyMra93/MRlh0BCf3nD39N4F+4QhOVX0kGxjzJZktsnwLqEZQvwGE8r42lB2qNFdo6cJ+jmx8BkMhVjNzoLm1M9SEC4YhgzbUxBCE9ZcQy7/Q0bGcBFTkT6hVx3U0zxLSzukV5CC84tuazmknNjIiA/Qwt0NsJeQRL3F0wU4LiKY+jq7NtFSGbnhPw34aZqj4HJYQ+/sDnwJqx3I9O74MUbmPtFDjBTQ014+jgwHeWsWO92nH75WMqBGy/llEoN1J12to+MlQp8YkZMwcXXmfRNQ1Q8NyVB3qKRFhUXgRejvlff8etSqci+/DobwAhsUPVnVh8/UAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Channel Approvals</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAMAAACgaw2xAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxQTFRFAAAAWlpaVlZWWVlZWlpaWVlZWlpaWVlZW1tbWFhYWVlZWFhYWVlZWVlZWVlZWVlZWFhYWVlZWlpaWFhYV4wTXwAAABR0Uk5TADBQX+//f5CPgM8gUN/vv79wb2CeaaHzAAAAXElEQVR4nI2QSxaAIAwDUYkfsOLn/ne1stMGX2fZWSRpCE66nt+HiJGKCcBMzaImZWbWCAg1WYBNKxSDCmgFNAg75/CM/nDa9Eo7/JkKsemeqcSkOpXx9+14vS837WkH8SCkZ+gAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Transactions</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAMAAAA7dZg3AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJQTFRFAAAAWlpaWVlZWlpaV1dXWVlZWlpaWFhYWFhYUFBQWFhYWVlZWVlZVlZWWVlZWlpaVVVVWFhYWlpaWVlZYGBgWVlZz4CF3wAAABZ0Uk5TAH+/b3D/gL+AEGDP31BQ7zBAMO8Qr4iWMhUAAABsSURBVHic7c3dEkAgEIDRtazCkt/3f1UrxTaYcc+5aGq/qQCCDA85JApSyiQZQhsgYZxWtWjIxrMllkG7bXl/RSWPATpZmZPk/ACg3rr8pRL6t86kvE79oIxJuvjTd9JkbzhJMz2Qq525swwrDtgJ9+8tzowAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Reports</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAWFhYWVlZWVlZWVlZWFhYWFhYWFhYWVlZVlZWUFBQWVlZV1dXWVlZWVlZYGBgWVlZWlpaVVVVWlpaWFhYWlpaWFhYWlpaW1tbWlpaWlpa4scCjQAAABt0Uk5TACC//89ggEBwUBDfcK/vEJDvMJ+/b59/jzDPSSnwLAAAAOlJREFUeJy9lF0bgiAMhZmTaZCFZlH9/x8aCEjx1VWdO+V9trMzlLG/CzqsqgcP9XUGsfNQi0GMUM1JAnGy8g6GkQ4ih7irLeMgkjch6d2MjXZH8zyRIU8ihaL6rcbZUDyBwPeQEA4UIiUQhViIzYiLeXuxBauVVrsMcUXLVj0Noegtm+5NtBdtQAymGSWJLEyQcmG58un0N2ib7v4FcpT1avY76wq0RYzG2LDTJciNPvmQdAViDxe7VCGmYk6bMfOBuCXpWpgKldhbp1clExTuU0GcN3cX9QE15KG1xTyDx8bPoIOCiR/rBf6cCcqDei9JAAAAAElFTkSuQmCC"
                      alt="" /><span className="pl-4">Accounting Reports</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFpQTFRFAAAAWVlZVVVVUFBQWVlZWFhYWFhYWVlZWFhYWlpaWVlZWlpaYGBgWFhYWFhYWlpaWVlZWVlZWFhYWlpaWVlZWlpaWFhYWVlZWVlZV1dXWVlZWlpaVlZWWVlZjL7wtwAAAB50Uk5TAL8wEP9Af98ggM+fEL9g76/vgM+Qf5+PoJBQMFBweaHO9gAAATpJREFUeJy9kuFSgzAQhBPYkBOFQGqpCrz/a3rJEUpoYdQf7kzpNfP1bnOLUv8hrYtzoOQPYKQ4UGVJGeBFlfXrEfNmYWuwwtNIa5MpHJFlom4C10aGHDLFQ27FNHXoxVSHR4j9UJzr2FdQA7+zFMZcpHxf/nYK+UOoMD55sejiVVaIroOnZQcOXaAqoMg8VdH2VbbCK7C3mwZ62kIt4AYruyvrdFUHSxuoQRefOvz4QEufwGDIZpD0+FqWadIJZeNcDKBFv14yxZaN48ac2aCeaYFGjpB9OzqD1BiSt+NTZrNx0yYT0xBFXMwbqJy9aA7zvGzJcKHv0HR/qfpp7VTkkIVrRDZlG7WF0kvGIsm0JAp73EG7HZpHTz+CUkRxHpXyFYoMOtIvIe0PpRfI41QSi5qbE51Y+YO+ATGbFB45a0B0AAAAAElFTkSuQmCC"
                      alt="" /><span className="pl-4">Principal Agent Management</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFdQTFRFAAAAWFhYWFhYWVlZWVlZWVlZWFhYWFhYWVlZWlpaWFhYWlpaWVlZWVlZWlpaWFhYUFBQWVlZV1dXWlpaWVlZWVlZV1dXWVlZWVlZYGBgVlZWWlpaWFhYdyRmagAAAB10Uk5TAJ9gz/9wfyC/MIDv79+AvxCgcJ+PkJCvUBBQH0AZ6EVAAAAA1ElEQVR4nL2S6w7CIAyFWensLuJQvE19/+e0sLGxbAIx0fOnJHw5p9AKkaWCBSkIQGKZtNph0iiLIWRVScoq6ZWlGjKMmozOfw3VbZmEqMU9JSBSWC1/eA0xcxDdYuwrSFuGE8PACdJ6qBKPtpzCQA+RUu5g/GUY6CHD62CIV0dq/8Q5cIQAFTesDBd/EwQOEHdL9hwwYeAAnfHiIq7hH86BDiJUWqwFKANIfZjyDe8TtMNikxE9TE60aHdLDPXdI878f30NRKRHKKqng15NVFuD+Fpv8KEIx1/k33gAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Reconciliation</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFAAAAWFhYWFhYVlZWWlpaWVlZWVlZWVlZWVlZ8P4ZywAAAAl0Uk5TAECAUJ//UL+gigUyVgAAAFVJREFUeJxjYKAuEFKCA2WICEsoEnAAC6UiCwWChVTDERpLgyBCQQhjVfEJCSmCrVVEEgIhoNlB+IWwaBy1EVd0iCJHWhhYiANZqAFiQBJCoyIDdQEAmTs9WpRjsq0AAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Remittance Settlement</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeBAMAAAC2z6FgAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC1QTFRFAAAAUFBQWVlZWVlZWlpaWFhYWVlZWVlZWFhYWVlZWVlZWFhYWFhYWFhYV1dXt6/wtAAAAA90Uk5TABCPv58gr/9AX9+/gKCQkMvJxAAAAHdJREFUeJxjYCARMCobGxubBCALsZWDgAGyEDtYqABVqKOjA10ISJAqxAg0ph1VaDrYNhSh5ZhC5dW7d29HEyrAMJ5aQj1nzpxBFWKChQlCiB2bEIZGOIuAECh8K0CBAwtoiPFwABLiRhVKAAqx3t6NBPYJMBAHACrEYStU4gG5AAAAAElFTkSuQmCC"
                      alt="" /><span className="pl-4">Regulatory Reports</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9QTFRFAAAAWlpaWlpaWVlZWVlZVVVVWVlZWVlZWFhYWVlZWVlZWFhYW1tbWFhYWVlZWVlZWlpaWFhYWVlZWFhYWlpaAxCqygAAABV0Uk5TAH/v/88wj+8g33Bgj4BQkDC/v0DPx7PIIQAAAKBJREFUeJy9z9sSwiAMBNBIUKlXbP3/bzWpHVtK2PjS7gMzMGfIhmj/HALPiUfTnLjI2VSB/1DyPl9SZ6sRpcsVKkVJZt6QUnTXLmiiooccHeo1dnpyzKh9sV1LGahWFqqUidZKUHLVS7Z3VQ5A9eSpYVm3ofSnN2GlJmSCqjKGMkylTLNSDVOoplkoYH4KmkkN2HwVO2ZSjhEVuffMtvkAyHIH4YOmbnYAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Offers And Campaigns</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfBAMAAAACQmA0AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRFAAAAWlpaWlpaWVlZW1tbWVlZWFhYWFhYWlpaWlpa5fE4XgAAAAp0Uk5TAH/v/4+PQICfgClsvpcAAABPSURBVHicY2BAB0LGSECFgdUYBTAwofGZjZE104efXgZFUH6xORTh4KOrp697OdDCqxmNjwzUQfwJyCYwG1syoPInoPJRpRmYUaUZOFG5APE7JEhHhgVzAAAAAElFTkSuQmCC"
                      alt="" /><span className="pl-4">SMS</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxQTFRFAAAAWlpaWVlZWlpaV1dXWVlZWlpaWFhYWFhYWVlZWVlZWFhYWVlZVVVVWFhYWFhYUFBQWFhYWlpaWVlZkQAB5gAAABR0Uk5TAH+/b3D/gL+A38+f7zBAYBAgMHDHm65vAAAAqklEQVR4nOXT2w7CIAyA4VpXKUxhuPd/VyeHzQZSEued/9XCvjACDOCXXVDpms1EareEDCGXkCzLkLAgrh/mMnTEf4LcXHJ0n2VuR2rNTG2uXVNbZ+EnkfruFEJ8jBGR7yFf76FXENfdZYFCWD5QMFuuQWLKVLRjtBlrB+htotFRMqCjbCryfoHon/lhR8V0T7qiaiDkzez+5lMxx7GI1jy6CgNGpNy1L3oBggYOb8M0qMsAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Transaction Dashboard</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEtQTFRFAAAAWFhYWFhYWVlZWVlZWFhYWFhYWVlZWVlZUFBQWVlZWVlZWlpaVlZWWVlZWlpaVVVVWlpaWVlZWFhYWFhYWlpaWVlZWVlZV1dX78Q+QQAAABl0Uk5TAECA/79gIN+gEK9QMFDPzzDvcLC/H1/vcMzFEs4AAADkSURBVHicrZLbEoMgDEQTIlClUu3F9v+/tAlaKwojzrgvZOSMSZYFKBKqHSFDinakDkBVvlc1Qyo/sToKbdbRGsAoE0HrSTWRBkv2OFTU7qztisw86e2KonKeku301omNLvU+1IQLw1X9h9ZmjleOIRcbH+vaAnqGbgawy0GW+ql1Tx4SUelCnEimaMJ5T4SOISf/ERuE7tsEVI+bPULfJxGm2k3rq99ar9zgyBOFgqcyGaiVmQYuBj7fmDCTv31G4yWX83axpI9f+GSTb8e/uiIYcdwjOExGZcrJ8u2ykhSYUH0BGtsKeoyeSXkAAAAASUVORK5CYII="
                      alt="" /><span className="pl-4">Sanction Management</span>
                  </div>
                  <span>+</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-4"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAMAAACt+qpmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAFFQTFRFAAAAWFhYWVlZWlpaWVlZWVlZUFBQWVlZWFhYWVlZWVlZV1dXWFhYWVlZWFhYWFhYWVlZWlpaWVlZWFhYV1dXVlZWWFhYWlpaWVlZYGBgVVVVMPC1tAAAABt0Uk5TAEC/7//PEF8g31CvYO+ggJB/r7+QULCfcBAwhWM9OAAAAMtJREFUeJzF02ETgiAMBuABg8BITDKr//9DQ09kMrquT72fOJ/Dg20AgJAKSbSBkhNWIWod6k6QnIl6vFig6cnegBJq3LWJWdu4KcOBnJmhVUUZQud25Zg2L9EYKJrrKP1+6XhAu/7O2SY6VLfeoWthh5g2WUTRwG2xnOMjxp9x0rnZztfo6SxMFcYyDxrvDEMuDfnyRxxxzjgzDPSej7pCQ7GB19bk92Aaha/zFdNDMi1L4+vhqdBNgiV1cBm1Q7No1ra+YkOUTHP2Br7JDitVFYTqAAAAAElFTkSuQmCC"
                      alt="" /><span className="pl-4">Logs And Security</span>
                  </div>
                  <span>+</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div class="row">
          <div class="col-md-6">
            <h4 class="ml-4 mt-3 heading-color">
              <Link data-toggle="tooltip" title="Back" to="/">
                <i class="fas fa-chevron-left"></i>
              </Link>&nbsp;
              <span class="ml-1 heading-color">Back</span>
            </h4>
          </div>
        </div>
        <div>
          <div className="p-8" id="MerchantRight_merchantRight__zDik1">
            <div className="grid grid-cols-4" id="MerchantRight_statusContainer__KNVxq">
              <div className="MerchantRight_status__jN1up">
                <h5>Revenue Status</h5>
                <div className="flex items-center MerchantRight_statusText__ZUNu4">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9QTFRFAAAAEID/DYn/Dov/DYr/DYr/Dor/Dor/Dov/Dor/Don/DIf/Don/DYr/Dov/DYr/CIf/Dor/Dov/Doj/Don/C4r/DYv/Don/EIf/DYn/Dor/Dov/Don/EI//Dor/Dor/C4X/DYf/EIX/CIz/D4r/h78pNAAAACV0Uk5TABBQcJ+/3//vz4BAj69/YCDvz5BwML+gIK9vj98QkJ8wYDAf3/VzSswAAAPfSURBVHicrZnbeqIwEIADQiggIoKIW+3W3b7/My4zOZOEBNy56KeQ/M4xmaSErEuSHrKc0mKWjzLPqjoJTFiHHZFkCs3SfdC6+bBpXLJ0s3InP43p2Z734bpLP6RnnHy+1kM/KuQpmtcKz3W9Iwb1jUoto3DTKGm+IfWNI+8Rdv9i1nbVaiiniqnZhZRMPmNwDMmU/FwfVeKgMSqCU4ODy5XBE9rRDTE4kKHD2HiJjPfYkGBsho/I3o6b6urZ+ImM12/BgXx5iRiPaiuPEIx2adv1uUs/kC9n9rTwtNnDIwRLa5EaE9THY+fi+QTvd6YbG/vRBpkgH3P9SetQeosMMF8va7rfgUzAjVR57AQ/sNtgEDRa5hym9I4M1AWysRMqthsr2CVPXUW3gkl7zNblqG9UqCL7mDo9ODm2ZEuo2k5RRbZp/J4/Zbt4s07fcgZU4B3RhURr0kbx9HSuRVjA4oflwTFEEiqqKWBzalt8bbJEAOtZBienh1cX+KRmgs2wXFHTYsoiPorBbtt7oo9RNlPuQs1Wrq8cLIPTNVmjviQ2EOOcIDf3A08CwXbql0DebSC5oBOrwlyodWBSy9hc+etJNTbJEghOHMitMBcuHahEFVK98KY2dcC5oxkTN1BLjuVPaW9S9B4Y/icE1J385QVO4AlMx78hoF6ZbQC4eBgGVl4gY0UBdR82/wNYqGVqKt4A1oPstsV6mcgnVXpxAn8Kf1DmchLdNF9KeUfKtoxlYk/onHUg6wpQ8qo9KEeciQ38nr+W+DT1A4l7+cKwL4FsWVgrPTHKlsEFZKUHf32LQ4xoU6GGKizA0gZ+BThC9KJkywIssF1iAbG3iJCXqcu8wGKYawtIXlFEvT8Abz+I2lu4/AgPTP0YkszYfcVuB07UavVWOHbpKIGMhQTUegihON3TG9fchWz50GzG3nFHL6b2d9lDMGHxLUOd19IIXIV4yXVmuK5R8V22V6dCdTRG90kiO6/c5OEckZTPhYpz5G+XAK+7mkBUUHoeVXyvaTezHBe9fGV8UJrC7Alf8ANvHHx+FYVZ1ph8bxzN4KRoHpww+XYVCOEb11KdwZEKsdJYBoO4j9Ex4jm6P3GDjL8gk4Itael4wepjs46on/tgx4j3TZFhXazvoLh+reOf4T94br2qYjd5awdZ3rrEXAvKi8a1yzQi9+NTECmuVfuQz/n2SdeRAhfjnkm0qJn/yvTIL33jLhrVcYk6mImkFQ+r3LxSqU0gPx7qb3btfE4Px1JdSIevVTWZXoF9ZRsOJb35ac2+3iJJbw49ab/znwscWlfZeGGXt3TMhiDsH3RYVexctF9hAAAAAElFTkSuQmCC"
                    alt="" />
                  <h1>$1300</h1>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAjBAMAAAB4EQeYAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBQTFRFAAAADYn/Dov/Dor/Dor/DYf/DYn/Don/Don/DYr/DIf/DYv/Dor/EIf/Doj/CIf/CLsBjAAAABB0Uk5TAF/v3/9gUKCAn0C/zyCQIKPX7CcAAABuSURBVHic5c67DYAwEINhU/AoEcoijBDJdBQUNGxGyRDMwwqsQHwhITvg5vTraw6wDSO+VWT/lSN9SQU6lS8po4vlE03k+mKghawjikAiokhl2IhUQrQiq4DoRFYBge1I1ezvO1Z5/6pzLuu67TxbVyU2jsBxYgAAAABJRU5ErkJggg=="
                    alt="" className="MerchantRight_arrow__sz32P" />
                </div>
              </div>
              <div className="MerchantRight_status__jN1up">
                <h5>Pageview</h5>
                <div className="flex items-center MerchantRight_statusText__ZUNu4">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAHJQTFRFAAAAEID/DYn/Dov/DYr/DYr/Dor/Dor/Dov/Dor/Don/DIf/Don/DYr/Dov/DYr/CIf/Dor/Dov/Doj/Don/C4r/DYv/Don/EIf/DYn/Dor/Dov/Don/EI//Dor/Dor/EIX/CIz/C4X/D4r/Doj/DYf/U3DQFAAAACZ0Uk5TABBQcJ+/3//vz4BAj69/YCDvz5BwML+gIK9vj98QkJ8wHzDfsGAF3+UyAAAD50lEQVR4nKVZ6WKiMBAGRCgBxCgF2qrdtev7v+IyMyQcmQRC55cc+Zj7MgjcFEaH+JgkaU9v2TEWebhywA1WINKckjjaB5qXbybaQHHkzdzJjkZ8Vud9cPJyraMzHj6/5/W1GSFPm/EqpTl5ZWyQt4nmchNc12g02yt5O0B+bJD7k6SVwmnKThCbco3J8GsLHEESk1/utzJ8qdlkwa7ElzPHyx3KIestcEC1RNtYEQnv5uFgdMKGSE8br7i6l3ZEwrv6wAE9rIhoD+GLFwRo7cyU62sXf0AP1nsquFvuwQsCDK2Fa3QQH7edyfMO2pdzNZbmLQ/qwB+P0zsVw7QP1XB+GtbJfgUSgRqTUWMn+MBugYFQaO1z6NI7PHBK4I1SsVh5RjBH9ymL6wyG557cToUs0s/IosG8ErEq8royZccyFgemOCCLdP+7/xUbL0RMjZ8Am6kfIvADoVMNPaGTCw7IKKK5MgtIfOOerpDBA8gc2SRu1uAWoaZkhnSVMF+7r+Ol6dLqIFUynN0qsQjDWl/8WXIh8Ss5x33E42H6EOrKMPQlBSWKlEnUYgSJ2/F3OFOHEQsP/GabMonrkU5OCQugYckab4I9DQ8oZ1yI2dWnFTBC7V0Y9WqvGaTSUtdhOHq8ofkuBTODaf5aAAHv8xlY3NICCI+WTwYAwDthqblzgZ0ZxxCLBfwZ8agt6LhxwBNQ4VGxwBzfd7XtPsDLFI+09S6pRx6dyNAhYf3wRpnikYd0wzNhBQSjSB6wrYN5SlTZD1z7YQN8oqXAoOxcNE+xgJgXbxgDgx7/LU9QWmBDz8DrpS5wPJC9W96pEzcyAIVezT1ylIBEuyWbHAQGoOmijpKi3dJQFKUFSB5ymXyfdrzBLRMmpcDDkJzYrwRA//su2RJwC8baYnBvJ3DLvFieUdUOlCiXD1fKKDuPKb1OeogJCTciMyvngwopPZuO83K2Ikw7PtZ33UMsP1mLuGwu82YpaeJYVEyzBIGsPGnWfbK0oZ0Dz1UdjbCw6EPo6q/h4r7O4iohg7rJRBZ/17SnM54w2M0E7EFlOu8JX/CBXww+WPxf0zvNr4TGSXE+OGFRS3ZaOmSGR5rWdqqxNAQG4sfoLWQZ3alQbF+QacLkbuZ81W1484j88YMdIX54WSZs7Hhrax37Cfvg6buqok2ea5Adlmlb1oJ60ehapgW6cTmtQqq16nVN5y9JqdkNqeC2qKdTI0BsX5kWw9J326JxrE8JgxlqtPRmhJuVxFiZjsUhf9La+RwdimxcSK+vVSfUuauoLxxS1NrRSqt6nRRGLTdNXHf+uTCA5iJuLrS87Yt8vQr2H5m2ToQpWxq0AAAAAElFTkSuQmCC"
                    alt="" />
                  <h1>$1300</h1>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAjBAMAAAB4EQeYAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBQTFRFAAAADYn/Dov/Dor/Dor/DYf/DYn/Don/Don/DYr/DIf/DYv/Dor/EIf/Doj/CIf/CLsBjAAAABB0Uk5TAF/v3/9gUKCAn0C/zyCQIKPX7CcAAABuSURBVHic5c67DYAwEINhU/AoEcoijBDJdBQUNGxGyRDMwwqsQHwhITvg5vTraw6wDSO+VWT/lSN9SQU6lS8po4vlE03k+mKghawjikAiokhl2IhUQrQiq4DoRFYBge1I1ezvO1Z5/6pzLuu67TxbVyU2jsBxYgAAAABJRU5ErkJggg=="
                    alt="" className="MerchantRight_arrow__sz32P" />
                </div>
              </div>
              <div className="MerchantRight_status__jN1up">
                <h5>Bounce Rate</h5>
                <div className="flex items-center MerchantRight_statusText__ZUNu4">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9QTFRFAAAAEID/DYn/Dov/DYr/DYr/Dor/Dor/Dov/Dor/Don/DIf/Don/DYr/Dov/DYr/CIf/Dor/Dov/Doj/Don/C4r/DYv/Don/EIf/DYn/Dor/Dov/Don/EI//Dor/Dor/EIX/CIz/D4r/C4X/DYf/MVzFIQAAACV0Uk5TABBQcJ+/3//vz4BAj69/YCDvz5BwML+gIK9vj98QkJ8wH98wYC1T++sAAAOCSURBVHicvZnrlqIwDIALIh1BVJRFHHVm1/H9n3FNAoXSprR1z+bHnJHSz1zatIlCuCVJV9k6z+VLPjbrrCiThQlu2BZJuuRZGgctqw+T1kuWBiu342mk5/4Qh6uPpyY94OTDr7I5tSNy583bD56rT5YYlOdcaemF61pF414pzz3y4mH3J1lbF85QdgWpWS8pmVx9cIQkJa/utzb4UusVwa7ClzeOlzu0o258cCBNjbFhicS7BSwwmsERabQN2lf3iicS7xSCA/liiRiPIpQnBEZ7Y9p1jdIP5Mu6evbwtIrhCYFba7Y0Otgft8jkeQfv17obK/NRgHSwHtfTJ3uL0iHSwPzpts7jHUgCbsxHj+3gC6INBkGj1ZrDJT1bgYn6usMqy1YH87kusBrrYWxv7ODkZUKGT4Z0O37KrMj7VEVTwW+CrPbb8axSny68ivRvanpQuqS2AlHFUqmT6aNOoLQCcQei8nep0G8ByyEsYPFtNhgDFGBzarc4Dgg2Q7rKTYvjgGBz3rtwPhYFxDgnyF3Px6KA4ohOLKQlUccBwYmNOEtL4upn6tunWAJCEssw8Ri3IvvMJWCK3gPDfzNA/Qa4WwJ2EsIMofnDAAN9SEDrG3FAYv1X4DTKxb8AurU2LzQ45yH5oEyjvDOAxkUIglI7gQsyB/68nm1wYRt1kQeoMIGUFlxbLxBIWw/+csmB2csc8AvHUjTcDmT05oCUFiDB1vOzu5/J7GUOCGMv0kOGHgEMEGJyE+PZ8jZwOO3AifPLQBQQTjtYgJM7xFvAsnchXYdnNj8igOP5ru4QoxRO4LpX4zmdAht52HLa7RMF3cDLLsEyWMs2sKiGG412+yR5ur2IorkJb8GDyndTxb5ydYleZaKCSmVUcZYuu/PRiXvqb0tNJyyFjPtIiFRSvxOiy94ofD6lnAW9tRjtL1gp6oUTFi55ZPGYWIpHqtYi3VgZBoPYy2gfYUr3O7YI/BtkSjDvGjlfDE2MYB1RP3trhoiXoMgkLc9bauvwM/jWUWirijp5rlZU30zzaQuqytfVTBP96nlFexE5tFVPSz5/Ut7K3cgB5+Oevi34OiD4lulQl/s1GsVTdW0tzETR5M3YbqwUY4d9vV2VP9R2PqSr7WZsSC+3VSfSPS1N+6mE4VDSM0+rWPc6JUnPth8XTpE/LvTQssjaIzVv8zZrFmF/AdnmTjZ2xM1RAAAAAElFTkSuQmCC"
                    alt="" />
                  <h1>$1300</h1>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAjBAMAAAB4EQeYAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBQTFRFAAAADYn/Dov/Dor/Dor/DYf/DYn/Don/Don/DYr/DIf/DYv/Dor/EIf/Doj/CIf/CLsBjAAAABB0Uk5TAF/v3/9gUKCAn0C/zyCQIKPX7CcAAABuSURBVHic5c67DYAwEINhU/AoEcoijBDJdBQUNGxGyRDMwwqsQHwhITvg5vTraw6wDSO+VWT/lSN9SQU6lS8po4vlE03k+mKghawjikAiokhl2IhUQrQiq4DoRFYBge1I1ezvO1Z5/6pzLuu67TxbVyU2jsBxYgAAAABJRU5ErkJggg=="
                    alt="" className="MerchantRight_arrow__sz32P" />
                </div>
              </div>
              <div className="MerchantRight_status__jN1up">
                <h5>Total Balance</h5>
                <div className="flex items-center MerchantRight_statusText__ZUNu4">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAHJQTFRFAAAAEID/DYn/Dov/DYr/DYr/Dor/Dor/Dov/Dor/Don/DIf/Don/DYr/Dov/DYr/CIf/Dor/Dov/Doj/Don/C4r/DYv/Don/EIf/DYn/Dor/Dov/Don/EI//Dor/Dor/EIX/CIz/D4r/C4X/Doj/DYf/R0JcDQAAACZ0Uk5TABBQcJ+/3//vz4BAj69/YCDvz5BwML+gIK9vj98QkJ8wH98wsGApfSPBAAADXklEQVR4nM2Z23qjIBCAxRioGpMQXWOa2O626/u/4mYGPHKmudi56Nei/M4BhmGaJHYh6S7bU8qe8pbvs6Ikjgl22AFJa6FZGgctqzeVJiVLg5U7mmlCz9M5DscvdZOecfL5V9nU7Yw8evNOo+d4rYlBeaWTll64rp1oplfKq0TePOx+F9bywhrKrhBqcpeS5O6DE0ih5N3+Vo4vtV4R7Cp8Obe83KEdvPHBgTQcY2MkCt4jYIGJGSaieNoG7au+MhMFrw7BgXwYiRiPIpSXJBjtXLXrHqUfyId29ZxgtIrhJQlurc3S6GB/PCKTZw/e52s3VupQgHSwHvfLkZNG6RBpYP5yW9N4BwoBN9LZY0f4QLTBIGj0tOZwSW9WYNfaz4Bq831YjXxU8aTu4M5xpCgh7JcqahSsXLxNVKWK4tdU40E3b5y9UlEcGp/P37IkGMg2U2AH3hDNJvSPgCWTYQGLH4kd+PApacDm1GDxBui3ycFmSFdUY/EG6FfJgM1UulB5aPWWQTDOBLl75aEK9AjLBY0pmC5RRwHBiU1yZbrEFQWEJJZh4lGroihgit4Dw3+/BtgxCDOE5o83sCCkcQA1D8xAdHZhAgpWEBB3TP8/AzENv9uBXywkKA0hR2YCQlB4IFAdX8j3cyjHha1mkyigSAsv33rw84XJocANmL8GKNICrCqupPj1RM8yT776xZxHgPGOthKICZx249liAVIvFcfTDpzItw83zqI+xxScdvDeooYwArWisVh4u9LYHAGcz/ephlgIDwbCRh633Kr6FNI6YE/5u54BOWOsaFbVp/yeU8VNwYlV8CD/6DUqdvaSk2+v1KjgNFaoXwwU9OCsE16F1HokQCq2rgkH+MAPLj54KgzLkfZHRuOdYX1xwqj6bVlViObyKG5rkW6sFINB9NdoHzFc3XtsEfg3yCbBY1XN+WMTI1hH1E/fmhHEW1BkSGvmudo65hnm1lFoq0p08mytKNlM82kLTo1GWzMtkavnGW0ncmyr1i6fDyITUjtyxPm4Z8qEmbllepAXfr9GYzJMXVsNk0w09lC2m1GKucO+P+zKb9F2Pqe7Qz43pN1t1YV0g6ZpvzoDgnAo6dVMq/yqna2Q9Kr750Id+c8FCS2LrL2I5i1ts8YJ+wfbP02uidiG9QAAAABJRU5ErkJggg=="
                    alt="" />
                  <h1>$1300</h1>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAjBAMAAAB4EQeYAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBQTFRFAAAADYn/Dov/Dor/Dor/DYf/DYn/Don/Don/DYr/DIf/DYv/Dor/EIf/Doj/CIf/CLsBjAAAABB0Uk5TAF/v3/9gUKCAn0C/zyCQIKPX7CcAAABuSURBVHic5c67DYAwEINhU/AoEcoijBDJdBQUNGxGyRDMwwqsQHwhITvg5vTraw6wDSO+VWT/lSN9SQU6lS8po4vlE03k+mKghawjikAiokhl2IhUQrQiq4DoRFYBge1I1ezvO1Z5/6pzLuu67TxbVyU2jsBxYgAAAABJRU5ErkJggg=="
                    alt="" className="MerchantRight_arrow__sz32P" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4" id="MerchantRight_productivityContainer__KEQ7u">
              <div className="MerchantRight_stat__EdXej" id="MerchantRight_newOrder__mCsLL">
                <h5>Revenue Status</h5>
                <h1>1300</h1>
                <div className="flex">
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'white'
                  }}></div>
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'rgb(177,177,177)'
                  }}></div>
                </div>
                <div className="MerchantRight_desc__NFwi6">
                  70% increase
                </div>
              </div>
              <div className="MerchantRight_stat__EdXej" id="MerchantRight_newSales__gcoTT">
                <h5>Revenue Status</h5>
                <h1>1300</h1>
                <div className="flex">
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'white'
                  }}></div>
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'rgb(177,177,177)'
                  }}></div>
                </div>
                <div className="MerchantRight_desc__NFwi6">
                  70% increase
                </div>
              </div>
              <div className="MerchantRight_stat__EdXej" id="MerchantRight_newUsers__MwLIJ">
                <h5>Revenue Status</h5>
                <h1>1300</h1>
                <div className="flex">
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'white'
                  }}></div>
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'rgb(177,177,177)'
                  }}></div>
                </div>
                <div className="MerchantRight_desc__NFwi6">
                  70% increase
                </div>
              </div>
              <div className="MerchantRight_stat__EdXej" id="MerchantRight_feedback__ap6R3">
                <h5>Revenue Status</h5>
                <h1>1300</h1>
                <div className="flex">
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'white'
                  }}></div>
                  <div className="w-1/2" style={{
                    height: '1px',
                    backgroundColor: 'rgb(177,177,177)'
                  }}></div>
                </div>
                <div className="MerchantRight_desc__NFwi6">
                  70% increase
                </div>
              </div>
            </div>
            <div className="flex" id="MerchantRight_transactionAnalytics__dHnxq">
              <div className="w-3/4 pe-0" id="MerchantRight_monthDetils__VjC-c">
                <div className="flex justify-between" id="MerchantRight_transacHeader__6vKSi">
                  <div className="flex items-center justify-between">
                    <h3>Transaction Statistic</h3>
                  </div>
                  <div className="flex items-center" id="MerchantRight_monthDetailsIndiciator__61d2m">
                    <div className="flex items-center justify-between" id="MerchantRight_online__nQPv7">
                      <div className="MerchantRight_circle__7jJeg"></div>
                      <h5>Online Collection</h5>
                    </div>
                    <div className="flex items-center justify-between" id="MerchantRight_upi__n7nNj">
                      <div className="MerchantRight_circle__7jJeg"></div>
                      <h5>UPI Collection</h5>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10/12" style={{ overflow: 'hidden' }} >
                    <div className="recharts-wrapper" style={{
                      position: 'relative',
                      cursor: 'default',
                      width: '800px',
                      height: '300px',
                    }}>
                      <svg className="recharts-surface" width="800" height="300" viewBox="0 0 800 300" version="1.1">
                        <title></title>
                        <desc></desc>
                        <defs>
                          <clipPath id="recharts1-clip">
                            <rect x="80" y="5" height="260" width="690"></rect>
                          </clipPath>
                        </defs>
                        <g className="recharts-cartesian-grid">
                          <g className="recharts-cartesian-grid-horizontal">
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="80" y1="265" x2="770" y2="265"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="80" y1="200" x2="770" y2="200"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="80" y1="135" x2="770" y2="135"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="80" y1="70" x2="770" y2="70"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="80" y1="5" x2="770" y2="5"></line>
                          </g>
                          <g className="recharts-cartesian-grid-vertical">
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="80" y1="5" x2="80" y2="265"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="195" y1="5" x2="195" y2="265"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="310" y1="5" x2="310" y2="265"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="425" y1="5" x2="425" y2="265"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="540" y1="5" x2="540" y2="265"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="655" y1="5" x2="655" y2="265"></line>
                            <line stroke-dasharray="3 3" stroke="#ccc" fill="none" x="80" y="5" width="690" height="260"
                              offset="[object Object]" x1="770" y1="5" x2="770" y2="265"></line>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                          <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                            className="recharts-cartesian-axis-line" stroke="#666" fill="none" x1="80" y1="265" x2="770"
                            y2="265"></line>
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                                className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="80" y1="271"
                                x2="80" y2="265"></line>
                              <text orientation="bottom" width="690" height="30" type="category" x="80" y="273"
                                stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value"
                                text-anchor="middle">
                                <tspan x="80" dy="0.71em">
                                  1
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                                className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="195" y1="271"
                                x2="195" y2="265"></line>
                              <text orientation="bottom" width="690" height="30" type="category" x="195" y="273"
                                stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value"
                                text-anchor="middle">
                                <tspan x="195" dy="0.71em">
                                  2
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                                className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="310" y1="271"
                                x2="310" y2="265"></line>
                              <text orientation="bottom" width="690" height="30" type="category" x="310" y="273"
                                stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value"
                                text-anchor="middle">
                                <tspan x="310" dy="0.71em">
                                  3
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                                className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="425" y1="271"
                                x2="425" y2="265"></line>
                              <text orientation="bottom" width="690" height="30" type="category" x="425" y="273"
                                stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value"
                                text-anchor="middle">
                                <tspan x="425" dy="0.71em">
                                  4
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                                className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="540" y1="271"
                                x2="540" y2="265"></line>
                              <text orientation="bottom" width="690" height="30" type="category" x="540" y="273"
                                stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value"
                                text-anchor="middle">
                                <tspan x="540" dy="0.71em">
                                  5
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                                className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="655" y1="271"
                                x2="655" y2="265"></line>
                              <text orientation="bottom" width="690" height="30" type="category" x="655" y="273"
                                stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value"
                                text-anchor="middle">
                                <tspan x="655" dy="0.71em">
                                  6
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line orientation="bottom" width="690" height="30" type="category" x="80" y="265"
                                className="recharts-cartesian-axis-tick-line" stroke="#666" fill="none" x1="770" y1="271"
                                x2="770" y2="265"></line>
                              <text orientation="bottom" width="690" height="30" type="category" x="770" y="273"
                                stroke="none" fill="#666" className="recharts-text recharts-cartesian-axis-tick-value"
                                text-anchor="middle">
                                <tspan x="770" dy="0.71em">
                                  7
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                          <line stroke="0" orientation="left" width="60" height="260" type="number" x="20" y="5"
                            className="recharts-cartesian-axis-line" fill="none" x1="80" y1="5" x2="80" y2="265"></line>
                          <g className="recharts-cartesian-axis-ticks">
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line stroke="0" orientation="left" width="60" height="260" type="number" x="20" y="5"
                                className="recharts-cartesian-axis-tick-line" fill="none" x1="74" y1="265" x2="80" y2="265">
                              </line>
                              <text stroke="none" orientation="left" width="60" height="260" type="number" x="72" y="265"
                                fill="0" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                <tspan x="72" dy="0.355em">
                                  0
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line stroke="0" orientation="left" width="60" height="260" type="number" x="20" y="5"
                                className="recharts-cartesian-axis-tick-line" fill="none" x1="74" y1="200" x2="80" y2="200">
                              </line>
                              <text stroke="none" orientation="left" width="60" height="260" type="number" x="72" y="200"
                                fill="0" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                <tspan x="72" dy="0.355em">
                                  2500
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line stroke="0" orientation="left" width="60" height="260" type="number" x="20" y="5"
                                className="recharts-cartesian-axis-tick-line" fill="none" x1="74" y1="135" x2="80" y2="135">
                              </line>
                              <text stroke="none" orientation="left" width="60" height="260" type="number" x="72" y="135"
                                fill="0" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                <tspan x="72" dy="0.355em">
                                  5000
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line stroke="0" orientation="left" width="60" height="260" type="number" x="20" y="5"
                                className="recharts-cartesian-axis-tick-line" fill="none" x1="74" y1="70" x2="80" y2="70">
                              </line>
                              <text stroke="none" orientation="left" width="60" height="260" type="number" x="72" y="70"
                                fill="0" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                <tspan x="72" dy="0.355em">
                                  7500
                                </tspan>
                              </text>
                            </g>
                            <g className="recharts-layer recharts-cartesian-axis-tick">
                              <line stroke="0" orientation="left" width="60" height="260" type="number" x="20" y="5"
                                className="recharts-cartesian-axis-tick-line" fill="none" x1="74" y1="5" x2="80" y2="5">
                              </line>
                              <text stroke="none" orientation="left" width="60" height="260" type="number" x="72" y="12"
                                fill="0" className="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                <tspan x="72" dy="0.355em">
                                  10000
                                </tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <path stroke="#8884d8" stroke-width="2" fill="none"
                            points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                            width="690" height="260" className="recharts-curve recharts-line-curve"
                            stroke-dasharray="921.835205078125px 0px" type="monotone"
                            d="M80,202.6C118.33333333333334,215.626,156.66666666666666,228.65200000000002,195,228.65200000000002C233.33333333333334,228.65200000000002,271.6666666666667,10.200000000000005,310,10.200000000000005C348.3333333333333,10.200000000000005,386.6666666666667,163.392,425,163.392C463.3333333333333,163.392,501.6666666666667,140.20000000000002,540,140.20000000000002C578.3333333333334,140.20000000000002,616.6666666666666,166.20000000000002,655,166.20000000000002C693.3333333333334,166.20000000000002,731.6666666666666,159.70000000000002,770,153.20000000000002">
                          </path>
                          <g className="recharts-layer recharts-line-dots">
                            <circle r="3" type="monotone" stroke="#8884d8" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="80" cy="202.6" className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#8884d8" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="195" cy="228.65200000000002"
                              className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#8884d8" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="310" cy="10.200000000000005"
                              className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#8884d8" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="425" cy="163.392" className="recharts-dot recharts-line-dot">
                            </circle>
                            <circle r="3" type="monotone" stroke="#8884d8" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="540" cy="140.20000000000002"
                              className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#8884d8" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="655" cy="166.20000000000002"
                              className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#8884d8" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="770" cy="153.20000000000002"
                              className="recharts-dot recharts-line-dot"></circle>
                          </g>
                        </g>
                        <g className="recharts-layer recharts-line">
                          <path stroke="#82ca9d" stroke-width="2" fill="none"
                            points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                            width="690" height="260" className="recharts-curve recharts-line-curve"
                            stroke-dasharray="705.483642578125px 0px" type="monotone"
                            d="M80,161C118.33333333333334,169.66666666666666,156.66666666666666,178.33333333333334,195,187C233.33333333333334,195.66666666666666,271.6666666666667,213,310,213C348.3333333333333,213,386.6666666666667,192.71999999999997,425,192.71999999999997C463.3333333333333,192.71999999999997,501.6666666666667,215.85999999999999,540,215.85999999999999C578.3333333333334,215.85999999999999,616.6666666666666,209.79333333333332,655,202.85999999999999C693.3333333333334,195.92666666666665,731.6666666666666,185.09333333333333,770,174.26000000000002">
                          </path>
                          <g className="recharts-layer recharts-line-dots">
                            <circle r="3" type="monotone" stroke="#82ca9d" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="80" cy="161" className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#82ca9d" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="195" cy="187" className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#82ca9d" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="310" cy="213" className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#82ca9d" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="425" cy="192.71999999999997"
                              className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#82ca9d" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="540" cy="215.85999999999999"
                              className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#82ca9d" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="655" cy="202.85999999999999"
                              className="recharts-dot recharts-line-dot"></circle>
                            <circle r="3" type="monotone" stroke="#82ca9d" stroke-width="2" fill="#fff"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="690" height="260" cx="770" cy="174.26000000000002"
                              className="recharts-dot recharts-line-dot"></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="w-2/12 mr-0">
                    <div id="MerchantRight_transaction__yt2AC" className="text-center flex flex-col items-center">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABGBAMAAACpsA4YAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFQTFRFAAAAFMfHFMrKE8nJFMnJE8fHFMvLFMnJEMfHFMrKFMnJakrVRgAAAAt0Uk5TAEC/7/9gf+8gz8/SJ6iEAAAAnUlEQVR4nGNgoAZgVHYBAacAQgpTXCDAjYA6VhcYEMCvkAmuUAG/Qha4wgKCCsG0i4vDqMJRhaMKcSkUMgFnJ1VCCtlgGS+BgMIQmEJHAgpVYAqdCCiE53l3ggod4B4eVTiqkIoKketGvAqR60Z8ClHqRnwKUepGfApR6kYCChH8UYWjCmmhsMmFKDCDYQlxCp0YCKuBAETFgh94AQClouJoqEhl/gAAAABJRU5ErkJggg=="
                        alt="" width="40" />
                      <h6>Transaction</h6>
                      <h6>$1234</h6>
                    </div>
                    <div id="MerchantRight_transaction__yt2AC" className="text-center flex flex-col items-center"
                      style={{ marginTop: "32px" }}>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGNQTFRFAAAAFMnJEM/PEsbGE8rKFcnJFMrKFMnJE8fHEMfHFMvLE8nJE8nJFcXFEMXFE8zMFMrKFcfHFMfHE8fHFMnJFMrKFMnJE8jIE8nJFMjIEsjIFMfHE8jIFcjIFcjIEsrKE8nJll4TPwAAACF0Uk5TAP8QcJ/fz69gIH/v3zAwX79gQKDvj8+fr3BwgJDfkG9QLQ6/qgAAAbtJREFUeJzt2Nl2gjAQANAQUBOhFgPaWrr9/1c2ZtiJnRnIQ09P5glZ7pnJRlCIGH80kntEMIIR5IIyzXb21P6gdAhQHvOki/woN4O6SMZRPG0ET3kyi+dNoF54K8QRKNt6y7MW0lTwo+ZWPQIv0G6myxf8gtkzA6jh+WGwyKs7c1kLvsy8XjT+J1FQvdqj2+Qi9FK5ErQZqWx29Y2fIjKXS3aKCGjYKWKrDTtFDIQUGaMbA4UbOk1AMHUTMCAoc163oKCoeN2Cg65bavISgYPC1Xz7/R4W+M6q2YHNPdxP3xEMRfng6nA0Aoc0fUfio6sZuY8MNl3NocC+5lAgrBANA8Qau6uZ3CkCCenuok0/Egg1fwYEYckhTT8aKOnTjwYyph8RpL+siKD3ZZUpT6tSQUhx0opf9sRBrQUhxXq09YHd2XyvQQchxX1fZLvbW+zsySB0dLJvBQPecrDTwXaDW9jPDX0uYUHx7EbpoGdLn3s+ZRigUHPv5LmJA4rvSY6F91OLBQpdDek1/rWCB9qGrK42zV2WPlp6uCAaEYzgvwQ9/wqsiBFYhgZNaBC2aiFBoQJUHbJXY4SMH0kiFAn8NxQMAAAAAElFTkSuQmCC"
                        alt="" width="40" />
                      <h6>Transaction</h6>
                      <h6>$1234</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/4" id="MerchantRight_statistics__C5D4i">
                <h2>Statistic</h2>
                <div className="flex flex-col items-center" id="MerchantRight_statImg__HoQe5">
                  <img
                    src="data:image/png;base64,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"
                    width="156px" alt="" />
                  <h2>Tranasaction Incresed 40%</h2>
                </div>
                <div className="grid grid-cols-3">
                  <div className="MerchantRight_statText__XG6WK">
                    <h1>12%</h1>
                    <h3>Total Sales</h3>
                  </div>
                  <div className="MerchantRight_statText__XG6WK">
                    <h1>20%</h1>
                    <h3>Total Sales</h3>
                  </div>
                  <div className="MerchantRight_statText__XG6WK">
                    <h1>60%</h1>
                    <h3>Total Sales</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex" id="MerchantRight_invoice__iCg5q">
              <div className="w-3/4" id="MerchantRight_tableContainer__SQhP5">
                <table className="table table-zebra w-full">
                  <thead className="text-center">
                    <tr>
                      <th>Phone</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>8769870987</td>
                      <td>Aaditya singh</td>
                      <td>03 JUN 2022</td>
                      <td>
                        <span className="MerchantRight_completed__Gdvai">completed</span>
                      </td>
                      <td>$4567</td>
                    </tr>
                    <tr>
                      <td>8769870987</td>
                      <td>Aaditya singh</td>
                      <td>03 JUN 2022</td>
                      <td>
                        <span className="MerchantRight_delay__Ppl-l">delay</span>
                      </td>
                      <td>$4567</td>
                    </tr>
                    <tr>
                      <td>8769870987</td>
                      <td>Aaditya singh</td>
                      <td>03 JUN 2022</td>
                      <td>
                        <span className="MerchantRight_failed__4ede5">failed</span>
                      </td>
                      <td>$4567</td>
                    </tr>
                    <tr>
                      <td>8769870987</td>
                      <td>Aaditya singh</td>
                      <td>03 JUN 2022</td>
                      <td>
                        <span className="MerchantRight_completed__Gdvai">completed</span>
                      </td>
                      <td>$4567</td>
                    </tr>
                    <tr>
                      <td>8769870987</td>
                      <td>Aaditya singh</td>
                      <td>03 JUN 2022</td>
                      <td>
                        <span className="MerchantRight_delay__Ppl-l">delay</span>
                      </td>
                      <td>$4567</td>
                    </tr>
                    <tr>
                      <td>8769870987</td>
                      <td>Aaditya singh</td>
                      <td>03 JUN 2022</td>
                      <td>
                        <span className="MerchantRight_failed__4ede5">failed</span>
                      </td>
                      <td>$4567</td>
                    </tr>
                    <tr id="MerchantRight_tFoot__MfnSP">
                      <td>
                        <button>Page</button><button>1</button><button>2</button><button>Next</button>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Showing 8 out of 100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-1/4" id="MerchantRight_transactionGrowthChart__P0-wJ">
                <h4>Transaction Growth chart</h4>
                <h1>$13500</h1>
                <h3>Last 6 months</h3>
                <div className="recharts-wrapper" style={{
                  position: 'relative',
                  cursor: 'default',
                  width: '100%',
                  height: '183px',
                }}>
                  <svg className="recharts-surface" width="348" height="183" viewBox="0 0 390 183" version="1.1">
                    <title></title>
                    <desc></desc>
                    <defs>
                      <clipPath id="recharts6-clip">
                        <rect x="5" y="5" height="173" width="380"></rect>
                      </clipPath>
                    </defs>
                    <g className="recharts-layer recharts-area">
                      <g className="recharts-layer">
                        <defs>
                          <clipPath id="animationClipPath-recharts-area-7">
                            <rect x="5" y="0" width="380" height="179"></rect>
                          </clipPath>
                        </defs>
                        <g className="recharts-layer" clip-path="url(#animationClipPath-recharts-area-7)">
                          <g className="recharts-layer">
                            <path fill="#C6D8FC" fill-opacity="0.6"
                              points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                              width="380" height="173" type="monotone" stroke="none"
                              className="recharts-curve recharts-area-area"
                              d="M5,5C26.111111111111114,19.416666666666668,47.22222222222223,33.833333333333336,68.33333333333334,48.25C89.44444444444446,62.666666666666664,110.55555555555557,91.5,131.66666666666669,91.5C152.7777777777778,91.5,173.88888888888889,57.76500000000001,195,57.76500000000001C216.11111111111111,57.76500000000001,237.22222222222226,96.25750000000001,258.33333333333337,96.25750000000001C279.44444444444446,96.25750000000001,300.5555555555556,86.16583333333332,321.6666666666667,74.6325C342.77777777777777,63.099166666666655,363.8888888888889,45.07833333333332,385,27.05749999999999L385,178C363.8888888888889,178,342.77777777777777,178,321.6666666666667,178C300.5555555555556,178,279.44444444444446,178,258.33333333333337,178C237.22222222222226,178,216.11111111111111,178,195,178C173.88888888888889,178,152.7777777777778,178,131.66666666666669,178C110.55555555555557,178,89.44444444444446,178,68.33333333333334,178C47.22222222222223,178,26.111111111111114,178,5,178Z">
                            </path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3" id="MerchantRight_summary__DtgYx">
              <div className="MerchantRight_summaryItem__7A+cq" id="MerchantRight_transactionHistory__R62Yv">
                <div className="flex items-center" id="MerchantRight_profile__D5q8m">
                  <img src="./Assets/images/merchant.png" alt="" />
                  <div className="pl-3">
                    <h3>Wade Warren</h3>
                    <h4>Merchant</h4>
                  </div>
                </div>
                <div id="MerchantRight_transactionHistoryText__2+H5M">
                  <h6>Transction history</h6>
                  <ul>
                    <li className="flex justify-between items-center">
                      <span>Today Transaction</span><button id="MerchantRight_daily__GddCb">
                        $400
                      </button>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Last 7 days Transaction</span><button id="MerchantRight_weekly__s6uez">
                        $4000
                      </button>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Last 30 days Transaction</span><button id="MerchantRight_monthly__+yHL2">
                        $40000
                      </button>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Last 90 days Transaction</span><button id="MerchantRight_ninetyth__FWEd7">
                        $400000
                      </button>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Last 6 months Transaction</span><button id="MerchantRight_halfYearly__EqvHl">
                        $4000000
                      </button>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Last 1 Year Transaction</span><button id="MerchantRight_yearly__byOya">
                        $40000000
                      </button>
                    </li>
                  </ul>
                  <a href="#" id="MerchantRight_details__O8qw7">See details history &gt;&gt;&gt;</a>
                </div>
              </div>
              <div className="MerchantRight_summaryItem__7A+cq" id="MerchantRight_recentTransaction__GJUsN">
                <div className="flex justify-between">
                  <h3>Recent Transaction</h3>
                  <a href="#">See All &gt;&gt;&gt;</a>
                </div>
                <div id="MerchantRight_recentTransactionContainer__ISCsL">
                  <div className="flex MerchantRight_transaction__yt2AC">
                    <span className="MerchantRight_transacCircle__TgPHz" style={{
                      backgroundColor: 'rgb(19,42,244)'
                    }}></span>
                    <div>
                      <h3>Transaction 1</h3>
                      <p className="MerchantRight_transactionPara__bxTPZ">
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                      </p>
                      <p>5 min Ago</p>
                    </div>
                  </div>
                  <div className="flex MerchantRight_transaction__yt2AC">
                    <span className="MerchantRight_transacCircle__TgPHz" style={{
                      backgroundColor: 'rgb(249,68,48)'
                    }}></span>
                    <div>
                      <h3>Transaction 1</h3>
                      <p className="MerchantRight_transactionPara__bxTPZ">
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                      </p>
                      <p>5 min Ago</p>
                    </div>
                  </div>
                  <div className="flex MerchantRight_transaction__yt2AC">
                    <span className="MerchantRight_transacCircle__TgPHz" style={{
                      backgroundColor: 'rgb(66,175,79)'
                    }}></span>
                    <div>
                      <h3>Transaction 1</h3>
                      <p className="MerchantRight_transactionPara__bxTPZ">
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                      </p>
                      <p>5 min Ago</p>
                    </div>
                  </div>
                  <div className="flex MerchantRight_transaction__yt2AC">
                    <span className="MerchantRight_transacCircle__TgPHz" style={{
                      backgroundColor: 'rgb(225,85,31)'
                    }}></span>
                    <div>
                      <h3>Transaction 1</h3>
                      <p className="MerchantRight_transactionPara__bxTPZ">
                        Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                      </p>
                      <p>5 min Ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MerchantRight_summaryItem__7A+cq" id="MerchantRight_recentFeedback__UfXyH">
                <div className="flex justify-between">
                  <h3>Recent Feedbacks</h3>
                  <a href="#">See All &gt;&gt;&gt;</a>
                </div>
                <div className="flex items-top MerchantRight_feedBacksContainer__527Fb">
                  <div className="w-1/5">
                    <img src={feedbackImg} />
                  </div>
                  <div className="w-4/5">
                    <div className="MerchantRight_feedback__ap6R3">
                      Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit.
                      Repellendus, laudantium.
                    </div>
                  </div>
                </div>
                <div className="flex items-top MerchantRight_feedBacksContainer__527Fb">
                  <div className="w-1/5">
                    <img src={feedbackImg} />
                  </div>
                  <div className="w-4/5">
                    <div className="MerchantRight_feedback__ap6R3">
                      Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit.
                      Repellendus, laudantium.
                    </div>
                  </div>
                </div>
                <div className="flex items-top MerchantRight_feedBacksContainer__527Fb">
                  <div className="w-1/5">
                    <img src={feedbackImg} />
                  </div>
                  <div className="w-4/5">
                    <div className="MerchantRight_feedback__ap6R3">
                      Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit.
                      Repellendus, laudantium.
                    </div>
                  </div>
                </div>
                <div className="flex items-top MerchantRight_feedBacksContainer__527Fb">
                  <div className="w-1/5">
                    <img src={feedbackImg} />
                  </div>
                  <div className="w-4/5">
                    <div className="MerchantRight_feedback__ap6R3">
                      Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit.
                      Repellendus, laudantium.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex justify-between" id="MerchantRight_merchantFooter__vsHFR">
            <h6>Copyright @2022</h6>
            <h6>Version 1.0</h6>
          </footer>
        </div>
      </div>
      <span id="recharts_measurement_span" aria-hidden="true" style={{
        position: 'absolute',
        top: '-20000px',
        left: '0px',
        padding: '0px',
        margin: '0px',
        border: 'none',
        whiteSpace: 'pre',
        fontSize: '16px',
        letterSpacing: 'normal',
      }}>0</span>
    </>
  )
}

export default DashBoard